import { assets } from "../../assets/assets"
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className="search-box">
        <input type="text" placeholder='Enter a prompt here'/>
        <div>
            <img src={assets.gallery_icon} alt="gallery icon" />
            <img src={assets.mic_icon} alt="mic icon" />
            <img src={assets.send_icon} alt="send icon" />
        </div>
    </div>
  )
}

export default SearchInput