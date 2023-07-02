import Navbar from "../../components/navbar/Navbar";
import ListCard from "../../components/listCard/ListCard";
import "./myLists.scss"
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyLists = () => {
  const navigate = useNavigate();
  const navigateToMyLists = () => {
    navigate('/browse/myLists')
  }
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
    <div className="myLists">
        <Navbar />
        <div className="container">
          <ListCard />
          <ListCard />
          <div className="addList" onClick={toggleModal}>
            <h2>New List</h2>
            <Add className="centerIcon"/>
          </div>
          {modal && (
            <div className="modal">
              <div className="overlay">
                <div className="modalContent">
                  <h2 className="listLabel">New List</h2>
                  <form className="listFormInfo">
                    <label>List Name</label>
                    <input type="text"></input>
                    <button onClick={navigateToMyLists}>Create List</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default MyLists