import { useState, useEffect } from "react"
import moment from "moment"
import { getProjectList, getTaskList } from '../api'
import { collatedTasksExist } from '../helpers'
import * as _ from 'lodash'

export const useTasks = selectedProject => {
    let [tasks, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])

    const getTaskList = async (projectKey) => {
        try {
            let { code, data } = await getTaskList(projectKey)
            if (+code != 200) tasks = []

            data = _.map(data || [], (x) => {
                return {
                    id: x.taskId,
                    projectKey: x.projectKey,
                    task: x.task,
                    date: x.date,
                    archived: x.status,
                }
            })

            if (!collatedTasksExist(selectedProject)) {
                tasks = _.filter(data, (x) => x.projectKey === selectedProject)
            } else if (selectedProject === 'TODAY') {
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let tasks = getTaskList()

        if (selectedProject && !collatedTasksExist(selectedProject)) {
            tasks = tasks.filter(task => task.projectId === selectedProject )
        } else if (selectedProject === 'TODAY') {
            tasks = tasks.filter(task => task.date === moment().format('DD/MM/YYYY'))
        } else if (selectedProject === 'INBOX' || selectedProject === 0) {
            tasks = tasks.filter(task => task.date === '')
        }

        setTasks(tasks.filter(task => task.archived !== true))

        setArchivedTasks(tasks.filter(task => task.archived !== false))

        return () => { setTasks, setArchivedTasks }
    }, [selectedProject])

    return { tasks, archivedTasks }
}

function useProjects() {
    let [projects, setProjects] = useState([])
    console.log(projects)

    const queryProjects = async () => {
        try {
            let { code, data } = await getProjectList()
            if (+code !== 200) projects = []
            data = _.map(data || [], (x) => {
                return {
                    id: x.projectId,
                    key: x.projectKey,
                    name: x.projectName,
                }
            })
            setProjects(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        queryProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { projects, setProjects }
}

export default useProjects