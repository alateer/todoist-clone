import { useState } from 'react'
import { useSelectedProjectValue } from '../../context'
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import Projects from '../Projects'
import AddProject from '../AddProject'

function Sidebar() {
    
    const { setSelectedProject } = useSelectedProjectValue()
    const [active, setActive] = useState('inbox')
    const [showProjects, setShowProjects] = useState(true)

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                {/* Inbox */}
                <li
                    data-testid="inbox"
                    className={active === 'inbox' ? 'active' : undefined}
                >
                    <div 
                        data-testid="inbox-action"
                        aria-label="Show inbox tasks"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setActive('inbox')
                            setSelectedProject('INBOX')
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive('inbox')
                                setSelectedProject('INBOX')
                            }
                        }}
                    >
                        <span>
                            <FaInbox />
                        </span>
                        <span>Inbox</span>
                    </div>
                </li>

                {/* Today */}
                <li
                    data-testid="today"
                    className={active === 'today' ? 'active' : undefined}
                >
                    <div 
                        data-testid="today-action"
                        aria-label="Show today's tasks"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setActive('today')
                            setSelectedProject('TODAT')
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive('today')
                                setSelectedProject('TODAT')
                            }
                        }}
                    >
                        <span>
                            <FaRegCalendar />
                        </span>
                        <span>Today</span>
                    </div>
                </li>

                {/* Next week */}
                <li
                    data-testid="next_7"
                    className={active === 'next_7' ? 'active' : undefined}
                >
                    <div 
                        data-testid="next_7-action"
                        aria-label="Show tasks for the next 7 days"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setActive('next_7')
                            setSelectedProject('NEXT_7')
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive('next_7')
                                setSelectedProject('NEXT_7')
                            }
                        }}
                    >
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>

            {/* Show/Hide Projects Sidebar */}
            <div 
                className="sidebar__middle"
                aria-label="Show/hide projects"
                onClick={() => setShowProjects(!showProjects)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') setShowProjects(!showProjects)
                }}
                role="button"
                tabIndex={0}
            >
                <span>
                    <FaChevronDown
                        className={!showProjects ? 'hidden-projects' : undefined}
                    />
                    <h2>Projects</h2>
                </span>
            </div>

            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

            {showProjects && <AddProject />}
        </div>
    )
}

export default Sidebar