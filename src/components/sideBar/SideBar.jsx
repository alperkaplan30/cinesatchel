import "./sideBar.scss";
import mainLogo from "../../utils/mainLogo.png"
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const navigateToAdminPanel = () => {
    navigate('/adminPanel');
  }
  const navigateToVideos = () => {
    navigate('/adminPanel/videos');
  }
  const navigateToAddVideo = () => {
    navigate('/adminPanel/addVideo');
  }
  
  return (
    <div className="sideBar">
        <div className="logo">
            <img 
                className="logo"
                src={mainLogo}
                alt=""
            />
        </div>
        <hr />
        <div className="buttons">
            <button className="dashboardBtn" onClick={navigateToAdminPanel}>Dashboard</button>
            <button className="videosBtn" onClick={navigateToVideos}>Videos</button>
            <button className="addVideoBtn" onClick={navigateToAddVideo}>Add Video</button>
        </div>
    </div>
  )
}

export default SideBar;