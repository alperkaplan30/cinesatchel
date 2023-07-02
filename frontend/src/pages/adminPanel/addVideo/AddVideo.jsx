import SideBar from '../../../components/sideBar/SideBar'
import "./addVideo.scss"
import Select from "react-select"

const AddVideo = () => {
  const formatOptions = [
    { value: 'trailer', label: 'Trailer' },
    { value: 'movie', label: 'Movie' },
    { value: 'series', label: 'Series' }
  ];
  const categoryOptions = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'animation', label: 'Animation' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'crime', label: 'Crime' },
    { value: 'drama', label: 'Drama' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'horror', label: 'Horror' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'romance', label: 'Romance' },
    { value: 'sci_fi', label: 'Sci-Fi' },
    { value: 'thriller', label: 'Thriller' }
  ];

  return (
    <div className="addVideo">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <form className='videoInfoInputs'>
          <div className="nameInfo">
            <label>Name</label>
            <input type="text"  ></input>
          </div>
          <div className="categoryInfo">
            <label>Categories</label>
            <Select 
              className='categorySelect'
              isMulti={true}
              options={categoryOptions}
            />
          </div>
          <div className="formatInfo">
            <label>Format</label>
            <Select
              className='formatSelect'
              isMulti={false}
              options={formatOptions}
            />
          </div>
          <div className="descriptionInfo">
            <label>Description</label>
            <input type="text" ></input>
          </div>
          <div className="castInfo">
            <label>Cast</label>
            <input type="text" ></input>
          </div>
          <div className="directorInfo">
            <label>Director</label>
            <input type="text" ></input>
          </div>
          <div className="releaseDateInfo">
            <label>Release date</label>
            <input type="date" ></input>
          </div>
          <div className="durationInfo">
            <label>Duration</label>
            <input type="text" ></input>
          </div>
          <div className="addressInfo">
            <label>Address</label>
            <input type="url" ></input>
          </div>
          <div className="limitsInfo">
            <label>Limits</label>
            <input type="text" ></input>
          </div>
          <div className="seriesNameInfo">
            <label>Series Name</label>
            <input type="text"></input>
          </div>
          <div className="chapterNumberInfo">
            <label>Chapter Number</label>
            <input type="text"></input>
          </div>
        </form>
        <div className="buttons">
          <button className='addVideoBtn'>Add Video</button>
        </div>
      </div>
    </div>
  )
}

export default AddVideo