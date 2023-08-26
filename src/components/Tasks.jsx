import { useProjectsValue, useSelectedProjectValue } from "../context"
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers"
import collatedTasks from "../constants"
import { useEffect } from "react"
import AddTask from "./AddTask"
import Checkbox from "./Checkbox"
import { useTasks } from "../hooks"


function Tasks() {

    const { selectedProject } = useSelectedProjectValue()
    const { projects } = useProjectsValue()
    const { tasks } = useTasks(selectedProject)

    let projectName = ''

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
    }

    if (projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`
    })

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map((task) => (
                    <li key={`${task.taskId}`}>
                        <Checkbox id={task.taskId} taskDesc={task.task}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    )
}

export default Tasks