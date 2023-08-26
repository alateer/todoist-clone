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

export const getProjectList = () => {
    return projects
    //return http.get('/api/project/list')
}

export const addTaskApi = () => {
    return {}
    //return http.post('/api/task/add')
}