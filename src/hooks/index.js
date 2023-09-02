import { useState, useEffect } from "react"
import moment from "moment"
import { getProjectList, getTaskList } from '../api'
import { collatedTasksExist } from '../helpers'
import * as _ from 'lodash'

export const useTasks = selectedProject => {
    let [tasks, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])
    console.log(`useTasks, selectedProject: ${selectedProject}`)

    const queryTasks = async (projectKey) => {
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
                tasks = _.filter(data, (x) => x.date && moment(x.date).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY'))
            } else if (selectedProject === 'NEXT_7') {
                tasks = _.filter(data, (x) => x.date && moment(x.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7)
            } else if (selectedProject === 'INBOX' || selectedProject === 0) {
                tasks = _.filter(data, (x) => !x.date || x.date === '')
            }

            setTasks(_.filter(tasks, (x) => x.archived != true))
            setArchivedTasks(_.filter(tasks, (x) => x.archived != false))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        queryTasks(selectedProject)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { tasks, archivedTasks }
}

function useProjects() {
    let [projects, setProjects] = useState([])
    console.log('useProjects')

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