import "./navbar.scss"
import logo from "../../utils/logo.png"
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = ({ format, setCategory, setTerm }) => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
 
    window.onscroll = () => {
        setIsScrolled(window.ScrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    
    const navigateToHome = () => {
        navigate('/')
    }
    const navigateToMovies = () => {
        navigate('/movies')
    }
    const navigateToSeries = () => {
        navigate('/series')
    }
    const navigateToMyLists = () => {
        navigate('/myLists')
    }
    


    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="left">
            <img
                src={logo}
                alt=""
            />
            <span onClick={navigateToHome}>Homepage</span>
            <span onClick={navigateToMovies}>Movies</span>
            <span onClick={navigateToSeries}>Series</span>
            <span onClick={navigateToMyLists}>My Lists</span>
        </div>
        <div className="right">
            {format && (
                <select 
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Category</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animation">Animation</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci_Fi">Sci-Fi</option>
                    <option value="Thriller">Thriller</option>
                </select>
            )}
            {!format && (
                <SearchBar setTerm={setTerm} />
            )}
            <div className="account">
                    <span>profilename</span>
               
                <div className="options">
                    <span>Account Details</span>
                    <span>Profiles</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar