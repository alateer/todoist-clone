/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { archivedTask } from '../api'

function Checkbox({ id, taskDesc }) {

    console.log('checkbox id: ', id, 'teskDesc: ', taskDesc)
    const archiveTask = archivedTask()

    return (
        <div 
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTask()}
            onKeyDown={(e) => {
                if (e.key === 'Enter') archiveTask()
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