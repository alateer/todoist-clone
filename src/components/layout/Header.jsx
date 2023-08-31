/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import AddTask from '../AddTask'

function Header() {

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

export default Header