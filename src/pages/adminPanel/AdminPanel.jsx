import SideBar from "../../components/sideBar/SideBar"
import InfoCard from "../../components/infoCard/InfoCard"
import "./adminPanel.scss"


const AdminPanel = () => {
    return (
    <div className="adminPanel">
        <div className="left">
            <SideBar />
        </div>
        <div className="right">
            <InfoCard midInfo="9999" botInfo="Views" />
            <InfoCard midInfo="9999" botInfo="Users" />
            <InfoCard midInfo="9999" botInfo="Movies" />
            <InfoCard midInfo="9999" botInfo="Series" />
        </div>
    </div>
  )
}

export default AdminPanel