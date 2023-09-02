/* eslint-disable react/prop-types */
import moment from 'moment'
import PropTypes from 'prop-types'
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa'

function TaskDate({
    setTaskDate,
    showTaskDate,
    setShowTaskDate
}) {
    return (showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className="task-date__list">
                {/* Today */}
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().format('YYYY-MM-DD hh:mm:ss'))
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setShowTaskDate(false)
                                setTaskDate(moment().format('YYYY-MM-DD hh:mm:ss'))
                            }
                        }}
                        data-testid="task-date-today"
                        tabIndex={0}
                        aria-label="Select today as the task date"
                        role="button"
                    >
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>Today</span>
                    </div>
                </li>

                {/* Tomorrow */}
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(1, 'day').format('YYYY-MM-DD hh:mm:ss'))
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setShowTaskDate(false)
                                setTaskDate(moment().add(1, 'day').format('YYYY-MM-DD hh:mm:ss'))
                            }
                        }}
                        data-testid="task-date-tomorrow"
                        tabIndex={0}
                        aria-label="Select tomorrow as the task date"
                        role="button"
                    >
                        <span>
                            <FaSun />
                        </span>
                        <span>Tomorrow</span>
                    </div>
                </li>

                {/* Tomorrow */}
                <li>
                    <div
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss'))
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setShowTaskDate(false)
                                setTaskDate(moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss'))
                            }
                        }}
                        data-testid="task-date-next-week"
                        tabIndex={0}
                        aria-label="Select next week as the task date"
                        role="button"
                    >
                        <span>
                            <FaRegPaperPlane />
                        </span>
                        <span>Next week</span>
                    </div>
                </li>
            </ul>
        </div>
    ))
}

TaskDate.PropTypes = {
    setTaskDate: PropTypes.func.isRequired,
    showTaskDate: PropTypes.bool.isRequired,
    setShowTaskDate: PropTypes.func.isRequired,
}

export default TaskDate