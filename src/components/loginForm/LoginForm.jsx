import { useState } from "react";
import "./loginForm.scss";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const navigateToHome = () => {
        navigate('/browse')
    }

    return (
    <div className="loginForm">
        <button 
            className="loginButton"
            onClick={toggleModal}
        >
            Login
        </button>
        {modal && (
            <div className="modal">
                <div className="overlay">
                    <div className="modalContent">
                        <h2 className="loginLabel">Login</h2>
                        <form className="loginFormInfo">
                            <label>Email</label>
                            <input type="text"></input>
                            <label>Password</label>
                            <input 
                                type="password" 
                                minLength="8"
                                maxLength="30"
                            ></input>
                        </form>
                        <div className="loginFromButtons">
                            <button className="loginFromButton">Forget Password</button>
                            <button className="loginFromButton" onClick={navigateToHome}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
