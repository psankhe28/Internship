import React from "react";
import './Whatsapp.css'

const WhatsApp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=919560474073&text=Hello%21%20Can%20you%20please%20guide%20me%20with%20-"
        className="float no-underline hover:no-underline hover:text-white visited:no-underline visited:text-white focus:no-underline focus:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default WhatsApp;
