import { useState, useEffect } from "react"
import moment from "moment"
import { getProjectList, getTaskList } from '../api'
import { collatedTasksExist } from '../helpers'

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])

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
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjectList())
    }, [projects])

    return { projects, setProjects }
}

export default useProjects