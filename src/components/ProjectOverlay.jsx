/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useProjectsValue } from '../context'

function ProjectOverlay({
    setProject,
    showProjectOverlay,
    setShowProjectOverlay,
}) {

    const { projects } = useProjectsValue()

    return (
        projects &&
        showProjectOverlay && (
            <div className="project-overlay" data-testid="project-overlay">
                <ul className="project-overlay__list">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <div
                                data-testid="project-overlay-action"
                                onClick={() => {
                                    setProject(project.key)
                                    setShowProjectOverlay(false)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setProject(project.key)
                                        setShowProjectOverlay(false)
                                    }
                                }}
                                aria-label="Select the task project"
                                tabIndex={0}
                                role="button"
                            >
                                {project.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}

ProjectOverlay.PropTypes = {
    projects: PropTypes.array
}

export default ProjectOverlay