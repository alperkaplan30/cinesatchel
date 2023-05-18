import Navbar from "../../components/navbar/Navbar";
import VideoCard from "../../components/videoCard/VideoCard";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <h2>Popular on Cinesatchel</h2>
        <div className="popular">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <hr></hr>
        <div className="feedRow">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <div className="feedRow">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <div className="bot">

        </div>
      </div>
    </div>
  )
}

export default Home;