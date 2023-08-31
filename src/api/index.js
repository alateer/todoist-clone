import http from './http'

export const getProjectList = () => {
    return http.get('/project/projectList')
}

export const addProjectApi = (key, name) => {
    const result = http.post('/project/add', {
        key,
        name,
    })
    console.log(`addProjectApi: key: ${key} name: ${name}, result: ${result}`)
}

export const deleteProjectApi = (id) => {
    const result = http.get('/project/delete', {
        params: {
            'id': id,
        }
    })
    console.log(`deleteProjectApi: id: ${id}, result: ${result}`)
}

export const getTaskList = (projectKey) => {
    return http.get('/task/taskList', {
        params: {
            'projectKey': projectKey
        }
    })
}

export const archivedTask = () => {
    return true
}

export const addTaskApi = () => {
    return {}
    //return http.post('/api/task/add')
}