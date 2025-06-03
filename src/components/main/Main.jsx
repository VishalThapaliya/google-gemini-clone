import { useContext } from 'react'
import { assets } from '../../assets/assets'
import Card from '../card/Card'
import SearchInput from '../searchInput/SearchInput'
import './Main.css'
import { Context } from '../../context/Context'

const cards = [
    {
        id: 1,
        text: `Suggest beautiful places to see on an upcoming road trip`,
        icon: assets.compass_icon
    },
    {
        id: 2,
        text: `Briefly summarize this concept: urban planning`,
        icon: assets.bulb_icon
    },
    {
        id: 3,
        text: `Brainstrom team bonding activities for our work retreat`,
        icon: assets.message_icon
    },
    {
        id: 4,
        text: `Improve the readibility of the following code`,
        icon: assets.code_icon
    }
]

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    return (
        <main className='main'>
            <nav className="navbar">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user icon" />
            </nav>

            <div className="main-content">
                {!showResult ? 
                    <>
                        <div className="greet">
                            <p><span>Hello, Bishal</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <Card cards={cards} />
                    </>
                : 
                    <article className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user icon" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini icon" />
                            {loading 
                                ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div> 
                                : <p className='result-text' dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                            
                        </div>
                    </article>
                }

                <div className="main-bottom">
                    <SearchInput setInput={setInput} input={input} onSent={onSent} />

                    <p className="main-bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main