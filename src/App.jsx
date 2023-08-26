/* eslint-disable react/prop-types */
import './App.scss'
import PropTypes from 'prop-types'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import { useState } from 'react'
import { ProjectsProvider, SelectedProjectProvider } from './context'

function App({ darkModeDefault = false }) {

  const [darkMode, setDarkMode] = useState(darkModeDefault)

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

App.PropTypes = {
  darkModeDefault: PropTypes.bool
}

export default App
