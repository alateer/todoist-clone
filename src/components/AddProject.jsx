import { useState } from "react"
import { generatePushId } from "../helpers"
import { useProjectsValue } from "../context"
import { addProjectApi } from "../api"


function AddProject({ shouldShow = false }) {

    const [show, setShow] = useState(shouldShow)
    const [projectName, setProjectName] = useState('')

    const projectId = generatePushId()
    const { projects, setProjects } = useProjectsValue()

    const addProject = () => 
        projectName &&
        addProjectApi() &&

}

export default AddProject