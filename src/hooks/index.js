import { useState, useEffect } from "react"
//import moment from "moment"
import { getProjectList } from '../api'

export const useProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjectList())
    }, [projects])

    return { projects, setProjects }
}