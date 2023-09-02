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
    console.log('getTaskList, projectKey: ', projectKey)
    return http.get('/task/taskList', {
        params: {
            'projectKey': projectKey
        }
    })
}

export const archivedTask = (id) => {
    const result = http.get('/task/updateStatus', {
        params: {
            'taskId': id,
            'status': 2
        }
    })

    console.log(`archivedTask: id: ${id} result: ${result}`)
}

export const addTaskApi = (task) => {
    const result = http.post('/task/addTask', task)

    console.log(`archivedTask: task: ${task} result: ${result}`)
}