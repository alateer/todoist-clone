import { useState, useEffect } from "react"
//import moment from "moment"
import { getProjectList } from '../api'

function useProjects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(getProjectList())
    }, [projects])

    return { projects, setProjects }
}

export default useProjects