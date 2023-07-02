import { useState } from "react";
import "./registerForm.scss"

const RegisterForm = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div className="registerForm">
            <button 
            className="registerButton"
            onClick={toggleModal}
            >
                Register
            </button>
            {modal && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modalContent">
                            <h2 className="registerLabel">Register</h2>
                            <form className="registerFormInfo">
                                <label>Name</label>
                                <input type="text"></input>
                                <label>Surname</label>
                                <input type="text"></input>
                                <label>Email</label>
                                <input type="text"></input>
                                <label>Password</label>
                                <input type="password"></input>
                            </form>
                            <div className="registerFromButtons">
                                <button className="registerFromButton">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RegisterForm