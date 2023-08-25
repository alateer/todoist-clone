import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types' 

export const SelectedProjectContext = createContext()

// eslint-disable-next-line react/prop-types
function SelectedProjectProvider({ children }) {
    const [selectedProject, setSelectedProject] = useState('INBOX')

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            { children }
        </SelectedProjectContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedProjectValue = () => useContext(SelectedProjectContext)

SelectedProjectProvider.PropTypes = {
    children: PropTypes.node.isRequired
}

export default SelectedProjectProvider
