/* eslint-disable react/prop-types */
import './App.css'
import PropTypes from 'prop-types'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import { useState } from 'react'

function App({ darkModeDefault = false }) {

  const [darkMode, setDarkMode] = useState(darkModeDefault)

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content />
    </>
  )
}

App.PropTypes = {
  darkModeDefault: PropTypes.bool
}

export default App
