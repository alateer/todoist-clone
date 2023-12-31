import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import useProjects from '../hooks'

export const ProjectsContext = createContext()

// eslint-disable-next-line react/prop-types
function ProjectsProvider({ children }) {
    const { projects, setProjects } = useProjects()

    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            { children }
        </ProjectsContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProjectsValue = () => useContext(ProjectsContext)

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProjectsProvider