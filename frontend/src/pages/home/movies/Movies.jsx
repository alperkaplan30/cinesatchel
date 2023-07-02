import "./movies.scss"
import Navbar from '../../../components/navbar/Navbar'
import VideoCard from "../../../components/videoCard/VideoCard"

const Movies = () => {
  return (
    <div className="movies">
        <Navbar />
        <select name="category">
            <option>Category</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="sci_fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
          </select>
          <select name="category">
          <option>Category</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="sci_fi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
        </select>
      <div className="container">
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

export default Movies