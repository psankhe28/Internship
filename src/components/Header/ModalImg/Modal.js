import React, {useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Modal.css";
import {AiOutlineClose} from 'react-icons/ai';
import img from "../../../assets/popup.jpg"
export default function Modal() {
  const [modal, setModal] = useState(true);

  setTimeout(() => {
    setModal(false);
}, 5000);

  const toggleModal = () => {
    setModal(!modal);
}
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modalC1">
          <div onClick={toggleModal}></div>
          <div className="modal-content1">
            <img alt='' src={img}></img>
           
            <button
              className="close-modal cursor-pointer btn-a "
              onClick={toggleModal}
            >
              <AiOutlineClose/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
