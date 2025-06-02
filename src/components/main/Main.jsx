import { assets } from '../../assets/assets'
import Card from '../card/Card'
import SearchInput from '../searchInput/SearchInput'
import './Main.css'

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
  return (
    <main className='main'>
        <nav className="navbar">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
        </nav>

        <div className="main-content">
            <div className="greet">
                <p><span>Hello, Bishal</span></p>
                <p>How can I help you today?</p>
            </div>

            <Card cards={cards} />

            <div className="main-bottom">
                <SearchInput />

                <p className="main-bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </main>
  )
}

export default Main