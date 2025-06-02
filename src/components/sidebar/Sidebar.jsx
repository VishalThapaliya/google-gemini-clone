import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <aside className="sidebar">
            <div className="top">
                <img 
                    src={assets.menu_icon} 
                    className='menu' 
                    alt="menu icon" 
                    onClick={() => setIsExpanded(prev => !prev)}
                />

                <div className="new-chat">
                    <img src={assets.plus_icon} alt="plus icon" />
                    { isExpanded && <p>New chat</p> }
                </div>

                { isExpanded && <div className="recent">
                    <h4 className="recent-title">Recent</h4>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message icon" />
                         <p>What is React ...</p>
                    </div>
                </div> }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question icon" />
                    { isExpanded && <p>Help</p> }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history icon" />
                    { isExpanded && <p>Activity</p> }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="settings icon" />
                    { isExpanded && <p>Settings</p> }
                </div>
            </div>
        </aside>

    )
}

export default Sidebar