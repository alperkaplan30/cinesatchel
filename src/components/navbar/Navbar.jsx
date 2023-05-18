import "./navbar.scss"
import logo from "../../utils/logo.png"
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    const navigateToWelcome = () => {
        navigate('/');
    }
    const navigateToHome = () => {
        navigate('/browse')
    }
    const navigateToMovies = () => {
        navigate('/browse/movies')
    }
    const navigateToSeries = () => {
        navigate('/browse/series')
    }
    const navigateToMyLists = () => {
        navigate('/browse/myLists')
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
            <SearchBar />
            <div className="account">
                <span>accountName</span>
                <div className="options">
                    <span>Account</span>
                    <span>Profiles</span>
                    <span onClick={navigateToWelcome}>Logout</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar