import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoCard from "../../components/videoCard/VideoCard";
import "./home.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ format }) => {
  const [videoList, setVideoList] = useState([]);
  const [category, setCategory] = useState(null);
  const [popular, setPopular] = useState([]);
  const [term, setTerm] = useState(null);
  const [searchFeed, setSearchFeed] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getVideoList = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_KEY + `api/videos/${format ? "?format=" + format : ""}${format && category ? "&category=" + category : ""}`);
        //console.log(res);
        setVideoList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getSearchFeed = async () => {
      if (term !== null && term !== "") {
        try {
          const res = await axios.get(process.env.REACT_APP_API_KEY + `api/videos/search/${term ? "?term=" + term : ""}`);
          //console.log(res);
          setSearchFeed(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    const getPopular = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_KEY + `api/videos/popular`);
        //console.log(res);
        setPopular(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVideoList();
    getSearchFeed();
    getPopular();
    if (term === "")
      window.location.reload(false);
  },[format, category, navigate, term]);

  return (
    <div className="home">
      <Navbar format={format} setCategory={setCategory} setTerm={setTerm}/>
      <div className="container">
        {!format && term === null && (
          <>
            <h2 className="popularTitle">Popular on Cinesatchel</h2>
            <div className="popular">
            {popular.map((video, index) => (
                <VideoCard item={video} key={index} />
              ))}
            </div>
            <hr></hr>
          </>
        )}
        {term !== null && searchFeed.length !== 0 ? (
          <div className="feedRow">
            {searchFeed.map((video, index) => (
              <VideoCard item={video} key={index} />
            ))}
          </div>
        ) : (
          <div className="feedRow">
            {videoList.map((video, index) => (
              <VideoCard item={video} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;
