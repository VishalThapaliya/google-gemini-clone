import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <aside className="sidebar">
            <div className="top">
                <img 
                    src={assets.menu_icon} 
                    className='menu' 
                    alt="menu icon" 
                    onClick={() => setIsExpanded(prev => !prev)}
                />

                <div className="new-chat" onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt="plus icon" />
                    { isExpanded && <p>New chat</p> }
                </div>

                { isExpanded && <div className="recent">
                    <h4 className="recent-title">Recent</h4>
                    {prevPrompts.map((prompt, index) => (
                        <div onClick={() => loadPrompt(prompt)} className="recent-entry" key={index}>
                            <img src={assets.message_icon} alt="message icon" />
                            <p>{prompt.slice(0, 20)}...</p>
                        </div>
                    ))}
                    
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