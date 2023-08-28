//import http from './http'

const projects = [
    {
        "projectId": "Time",
        "docId": 1,
        "name": "A",
    },
    {
        "projectId": "Socket",
        "docId": 2,
        "name": "B",
    },
    {
        "projectId": "Box",
        "docId": 3,
        "name": "C",
    },
    {
        "projectId": "Category",
        "docId": 4,
        "name": "D",
    },
    {
        "projectId": "Tag",
        "docId": 5,
        "name": "E",
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

export const getTaskList = () => {
    return tasks
}

export const addTaskApi = () => {
    return {}
    //return http.post('/api/task/add')
}

export const getProjectList = () => {
    return projects
    //return http.get('/api/project/list')
}

export const addProjectApi = () => {
    return {}
}

export const deleteProjectApi = () => {
    return {}
}

export const archivedTask = () => {
    return true
}