//import http from './http'

const projects = [
    {
        "projectId": 1,
        "name": "A",
    },
    {
        "projectId": 2,
        "name": "B",
    }
]

const tasks = [
    {
        "taskId": 1,
        "projectId": "INBOX",
        "task": "A task",
        "date": "12/08/2022",
        "archived": false,
    },
    {
        "taskId": 1,
        "projectId": "INBOX",
        "task": "B task",
        "date": "12/09/2022",
        "archived": true,
    },
    {
        "taskId": 3,
        "projectId": "INBOX",
        "task": "C task",
        "date": "",
        "archived": false,
    },
    {
        "taskId": 4,
        "projectId": "INBOX",
        "task": "D task",
        "date": "",
        "archived": false,
    },
    {
        "taskId": 5,
        "projectId": "INBOX",
        "task": "E task",
        "date": "",
        "archived": true,
    }
]

export const getProjectList = () => {
    return projects
    //return http.get('/api/project/list')
}

export const getTaskList = () => {
    return tasks
}

export const addTaskApi = () => {
    return {}
    //return http.post('/api/task/add')
}

export const archivedTask = () => {
    return true
}