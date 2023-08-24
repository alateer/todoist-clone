import axios from "axios"

const http = axios.create({
    baseURL: '/api',
    timeout: 5000
})

http.interceptors.response.use(response => {
    return  response.data
}, reason => {
    return Promise.reject(reason)
})

export default http