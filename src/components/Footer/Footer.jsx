import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-scroll";

const Foot = () => {


  return (
    <footer className="footer" id="footer">
      <div className="container-foot">
        <div className="row-foot">
          <div className="footer-col">
            <h4 className="heading-1">LINKS</h4>
            <ul>
              <li>
                {" "}
                <Link to="#home" className="text-white cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <a href="#pastres" className="text-white">
                  Past Results
                </a>
              </li>
              <li>
                <a href="#packages" className="text-white">
                  Packages
                </a>
              </li>
              <li>
                <Link to="#mentor" className="text-white cursor-pointer">
                  Mentors
                </Link>
              </li>
              
              <li>
                <a href="#testimonial" className="text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#footer" className="text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="heading-2">GROUP LINKS</h4>
            <ul>
            <li>
                <a
                  href="https://chat.whatsapp.com/CtADuIvIAyKFku7QCD2ale"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  GDPI PREP
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/L96oMDPGUpe59ylf6gtTwL"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  BLACKIS IIMs
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/Jz2nGzDkymkJNpdlyZFffA
                "
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  CAP IIMs
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/GaDdCpchFnABiiblJEEhpA
                "
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  FMS
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/GagOk7cPfbiFPS1DZIDWr5"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  MDI
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/FJWLbFQRBC9B1I6lSJGezY"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  IITs
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/KaGQiKJ3fwZIM7LzDy3NqH"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  IMT
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="heading-2 head-1">GROUP LINKS</h4>
            <ul>
              <li>
                <a
                  href="https://chat.whatsapp.com/JQXLCdjJzfe7oGcilYFyit"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  SPJIMR
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/DGHJvzbqDi1EUYAqmNCnn6"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  XLRI
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/KGEWjUk3Nyp7mHBDSA1p47"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  IIFT
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/H0AIMpitvimFmbAUTvNlj3
                "
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  MICA
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/FehUlzvuiClJRbZXLOpJkm"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  SIBM & SCMHRD
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/KlOjevQ2GZo0OqnifTqCUW"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  NMIMS
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/LsWmSOYVsfvAogVOoAQTfT"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white"
                >
                  TISS
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="heading-3">FOLLOW US</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/prepkare"
                target="blank"
                className="link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com/prepkare?igshid=1s2k8iqmh8rx8
"
                target="blank"
                className="insta"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/PrepKare-102875175001953/"
                target="blank"
                className="fb"
              >
                <i className="fab fa-facebook-f fb"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="f">
        <p className="text-white px-16">&copy; 2023 PrepKare</p>
        <a href="#home">
        <FaArrowCircleUp
          style={{fontSize:'50px',padding:'5px'}}
          className="text-white cursor-pointer"
        />
        </a>
      </div>
    </footer>
  );
};

export default Foot;
