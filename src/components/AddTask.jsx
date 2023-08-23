/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

function AddTask({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) {

    console.log(showAddTaskMain)
    console.log(shouldShowMain)
    console.log(showQuickAddTask)
    console.log(setShowQuickAddTask)
    return (
        <div className="add_task">
            <h1>add_task</h1>
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