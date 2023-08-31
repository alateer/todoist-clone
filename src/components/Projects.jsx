import { useState } from "react"
import { useSelectedProjectValue, useProjectsValue } from '../context'
import IndividualProject from './IndividualProject'
import PropTypes from 'prop-types'

function Projects({ activeValue = null }) {
    const [active, setActive] = useState(activeValue)
    const { setSelectedProject } = useSelectedProjectValue()
    const { projects } = useProjectsValue()

    return (
        projects &&
        projects.map((project) => (
            <li
                key={project.id}
                data-testid="project-action-parent"
                data-doc-id={project.key}
                className={
                    active === project.key
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    data-testid="project-action"
                    tabIndex={0}
                    aria-label={`Select ${project.name} as the task project`}
                    onClick={() => {
                        setActive(project.key)
                        setSelectedProject(project.key)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setActive(project.key)
                            setSelectedProject(project.key)
                        }
                    }}
                >
                    <IndividualProject project={project} />
                </div>
            </li>
        ))
    )
}

Projects.propTypes = {
    activeValue: PropTypes.bool
}

export default Projects