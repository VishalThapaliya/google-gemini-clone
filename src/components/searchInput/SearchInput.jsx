import { assets } from "../../assets/assets"
import './SearchInput.css'

const SearchInput = ({ input, setInput, onSent}) => {
  return (
    <div className="search-box">
        <input onKeyDown={(e) => e.key === 'Enter' && onSent()} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
        <div>
            <img src={assets.gallery_icon} alt="gallery icon" />
            <img src={assets.mic_icon} alt="mic icon" />
            { input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send icon" /> : null}
        </div>
    </div>
  )
}

export default SearchInput