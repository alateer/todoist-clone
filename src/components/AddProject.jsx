import { useState } from "react"
import { generatePushId } from "../helpers"
import { useProjectsValue } from "../context"
import { addProjectApi } from "../api"
import PropTypes from 'prop-types'



function AddProject({ shouldShow = false }) {

    const [show, setShow] = useState(shouldShow)
    const [projectName, setProjectName] = useState('')

    const projectId = generatePushId()
    const { projects, setProjects } = useProjectsValue()

    function addProject() {
        if (projectName) {
            console.log(projectId)
            addProjectApi()
            setProjects([...projects])
            setProjectName('')
            setShow(false)
        }
    }

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input" data-testid="add-project-inner">
                    <input 
                        type="text"
                        className="add_project__name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        data-testid="project-name"
                        placeholder="Name you project"
                    />

                    <button 
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>

                    <span 
                        className="add-project__cancel"
                        aria-label="Cancel adding project"
                        data-testid="hide-project-overlay"
                        onClick={() => setShow(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setShow(false)
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        Cancel
                    </span>
                </div>
            )}

            <span className="add-project__plus">+</span>
            <span 
                className="add-project__test"
                aria-label="Add Project"
                data-testid="add-project=action"
                onClick={() => setShow(!show)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') setShow(!show)
                }}
                role="button"
                tabIndex={0}
            >
                Add Project
            </span>
        </div>
    )
}

AddProject.propTypes = {
    shouldShow: PropTypes.bool
}

export default AddProject