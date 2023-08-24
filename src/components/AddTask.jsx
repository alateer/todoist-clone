/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ProjectOverlay } from './ProjectOverlay'
import { TaskDate } from './TaskDate'

function AddTask({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) {
    const [showMain, setShowMain] = useState(shouldShowMain)
    const [showProjectOverlay, setShowProjectOverlay] = useState(false)
    const [project, setProject] = useState('')
    const [task, setTask] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [showTaskDate, setShowTaskDate] = useState(false)

    const { selectedProject } = useSele
    
    const addTask = () => {
        const projectId = project || selectedProject
    }


    return (
        <div className="add-task" data-testid="add-task-comp">
            {/* Task Main Tab */}
            {showAddTaskMain && (
                <div 
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') setShowMain(!showMain)
                    }}
                    tabIndex={0}
                    aria-label="Add task"
                    role="button"
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}

            {/* Task Main */}
            {(showMain || showQuickAddTask) && (
                <div className="add-task__main">
                    {/* Quick Add Task */}
                    {showQuickAddTask && (
                        <>
                            <div data-testid="quick-add-task">
                                <h2 className="header">Quick Add Task</h2>
                                <span 
                                    className="add-task__cancel-x"
                                    data-testid="add-task-quick-cancel"
                                    aria-label="Cancel adding task"
                                    onClick={() => {
                                        setShowMain(false)
                                        setShowProjectOverlay(false)
                                        setShowQuickAddTask(false)
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setShowMain(false)
                                            setShowProjectOverlay(false)
                                            setShowQuickAddTask(false)
                                        }
                                    }}
                                    tabIndex={0}
                                    role="button"
                                >
                                    x
                                </span>
                            </div>
                        </>
                    )}

                    <ProjectOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />

                    <TaskDate 
                        setTaskDate={setTaskDate}
                        showTaskDate={showTaskDate}
                        setShowTaskDate={setShowTaskDate}
                    />

                    <input 
                        type="text" 
                        className="add-task__content" 
                        aria-label="Enter you task"
                        data-testid="add-task-content"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <button 
                        className="add-task__submit"
                        data-testid="add-task"
                        type="button"
                        onClick={() => {
                            showQuickAddTask
                                ? addTask() && setShowQuickAddTask(false)  
                                : addTask()
                        }}
                    >
                        Add Task
                    </button>

                </div>
            )}
        </div>
    )
}

AddTask.PropTypes = {
    showAddTaskMain: PropTypes.bool,
    shouldShowMain: PropTypes.bool,
    showQuickAddTask: PropTypes.bool,
    setShowQuickAddTask: PropTypes.func,
}

export default AddTask