/* eslint-disable react/prop-types */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPizzaSlice, FaTasks } from 'react-icons/fa'
import AddTask from '../AddTask'

function Header({ darkMode, setDarkMode }) {

	const [shouldShowMain, setShouldShowMain] = useState(false)
	const [showQuickAddTask, setShowQuickAddTask] = useState(false)

	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
						<FaTasks className="logo-image" alt="Todoist" />
				</div>

				<div className="settings">
					<ul>
						<li className="settings__add">
							<button
								data-testid="quick-add-task-action"
								aria-label="Quick add task"
								type="button"
								onClick={() => {
									setShowQuickAddTask(true)
									setShouldShowMain(true)
								}}
							>
								+
							</button>
						
						</li>
						<li className="settings__darkmode">
							<button
								data-testid="dark-mode-action"
								aria-label="Darkmode on/off"
								type="button"
								onClick={() => setDarkMode(!darkMode)}
							>
								<FaPizzaSlice />
							</button>
						</li>
					</ul>
				</div>
			</nav>

			<AddTask 
				showAddTaskMain={false}
				shouldShowMain={shouldShowMain}
				showQuickAddTask={showQuickAddTask}
				setShowQuickAddTask={setShowQuickAddTask}
			/>

		</header>
	)
}

Header.PropTypes = {
	darkMode: PropTypes.bool.isRequired,
	setDarkMode: PropTypes.func.isRequired
}

export default Header