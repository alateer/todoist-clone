/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { archivedTask } from '../api'

function Checkbox({ id, taskDesc }) {

    const archiveTask = async (taskId) => 
        archivedTask(taskId)

    return (
        <div 
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTask(id)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') archiveTask(id)
            }}
            aria-label={`Mark ${taskDesc}`}
            role="button"
            tabIndex={0}
        >
            <span className="checkbox" />
        </div>
    )
}

Checkbox.PropTypes = {
    id: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
}

export default Checkbox