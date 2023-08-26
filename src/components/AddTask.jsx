/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import ProjectOverlay from './ProjectOverlay'
import TaskDate from './TaskDate'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { useSelectedProjectValue } from '../context'
import moment from 'moment'
import { addTaskApi } from '../api'

function AddTask({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) {
    const [showMain, setShowMain] = useState(shouldShowMain)
    const [showProjectOverlay, setShowProjectOverlay] = useState(false)
    const [project, setProject] = useState([])
    const [task, setTask] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [showTaskDate, setShowTaskDate] = useState(false)

    const { selectedProject } = useSelectedProjectValue()
    
    const addTask = () => {
        const projectId = project || selectedProject
        let collatedDate = ''

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY')
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY')
        }

        const response = addTaskApi({
            projectId,
            achived: false,
            date: collatedDate || taskDate,
            task,
            userId: 'jlIFXIwyAL3tzHMtzRbw',
        })
        if (response.code === 1) {
            setTask('')
            setProject('')
            setShowMain('')
            setShowProjectOverlay(false)
        }

        return (task && projectId)
    }


    return (
        <div 
            className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
            data-testid="add-task-comp"
        >
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

                    {/* Project Overlay */}
                    <ProjectOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />

                    {/* Task Date */}
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

                    {/* Cancel Add Task */}
                    {!showQuickAddTask && (
                        <span 
                            className="add-task__cancel"
                            data-testid="add-task-main-cancel"
                            onClick={() => {
                                setShowMain(false)
                                setShowProjectOverlay(false)
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setShowMain(false)
                                    setShowProjectOverlay(false)
                                }
                            }}
                            aria-label="Cancel adding a task"
                            tabIndex={0}
                            role="button"
                        >
                            Cancel
                        </span>
                    )}

                    {/* Project Overlay */}
                    <span 
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setShowProjectOverlay(!showProjectOverlay)
                        }}
                        tabIndex={0}
                        role="button"
                    >
                        <FaRegListAlt />
                    </span>

                    {/* Project Date */}
                    <span 
                        className="add-task__date"
                        data-testid="show-task-date-overlay"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setShowTaskDate(!showTaskDate)
                        }}
                        tabIndex={0}
                        role="button"
                    >
                        <FaRegCalendarAlt />
                    </span>
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