import "./videoCard.scss"
import coverImage from "../../utils/contents/lotr/lotrCover.jpg"
import { useNavigate } from "react-router-dom";

const VideoCard = () => {
  const navigate = useNavigate();
  const navigateToplayer = () => {
    navigate('/player');
  }
  return (
    <div className="videoCard">
        <img 
          src={coverImage}
          alt=""
          onClick={navigateToplayer}
        />
    </div>
  )
}

export default VideoCard