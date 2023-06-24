import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";


export default function Modal() {
  const [modal, setModal] = useState(false);
  const form = useRef();

  const notify = () => toast("Message sent!");
  const SendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3x4kk0c",
        "template_pyet4gi",
        form.current,
        "QuHJ2IQJ1WmTjjIja"
      )
      .then(
        (result) => {
          notify();

          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      toggleModal();
    }, 3000);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
    <div className="flex  mb-8">
      <button className="py-1 sm:w-[60%] my-4 text-xl bbutton mx-4 text-black hover:text-white">
        <a
          href="https://api.whatsapp.com/send?phone=919560474073&text=Hello%21%20Can%20you%20please%20guide%20me%20with%20-"
          className="no-underline text-black hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </button>
      <button
        onClick={toggleModal}
        className="py-3 sm:w-[60%] my-4 text-xl abutton"
      >
        Enroll with Us
      </button>
      </div>
      {modal && (
        <div className="modalC">
          <div onClick={toggleModal} className="overlay1"></div>
          <div className="modal-content">
            <h2 className="form-title">Fill in your details and we'll&nbsp;&nbsp; get back to <br/>you with the Best B-School Admissions Assistance!&nbsp;</h2>
            <div className="content">
              <div className="form-container-modal">
                <form className="form-modal" ref={form} onSubmit={SendEmail}>
                  <input
                    name="user_name"
                    placeholder="Your name"
                    type="text"
                    className="name"
                    id="name"
                    required
                  />
                  <input
                    name="user_number"
                    placeholder="Your Phone Number"
                    type="tel"
                    className="name"
                    id="name"
                    pattern="[0-9]{10}"
                    required
                  />
                  <input
                    name="user_email"
                    placeholder="Your email"
                    type="email"
                    className="name"
                    id="email"
                    required
                  />
                  <label
                    style={{
                      textDecoration: "none",
                      color: "black",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Subject
                  </label>
                  <br />

                  <textarea
                    name="message"
                    placeholder="Write something.."
                    className="subject text-sm"
                    id="subject"
                    required
                  >
                    {" "}
                  </textarea>
                  <input
                    type="submit"
                    value="Submit"
                    name="submit"
                    onSubmit={notify}
                    className="btn btn-1 cursor-pointer"
                  />
                </form>
              </div>
              <ToastContainer autoClose={500} className="h-20" />
            </div>
            <button
              className="close-m cursor-pointer cd"
              onClick={toggleModal}
            >
              <FaTimes/>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
