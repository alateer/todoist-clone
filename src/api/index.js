import http from './http'

export const getProjectList = () => {
    return http.get('/api/project/list')
}