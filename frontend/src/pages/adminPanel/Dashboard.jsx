import SideBar from "../../components/sideBar/SideBar"
import InfoCard from "../../components/infoCard/InfoCard"
import "./dashboard.scss"


const Dashboard = () => {
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

export default Dashboard