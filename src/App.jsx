/* eslint-disable react/prop-types */
import './App.scss'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import { ProjectsProvider, SelectedProjectProvider } from './context'

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Header />
        <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
