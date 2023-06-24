import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="navbar-fixed-top w-screen h-[80px] z-10  text-white fixed drop-shadow-lg hm">
      <div
        className="px-2 flex
       justify-between items-center w-full h-full text-white"
      >
        <div className="flex items-center justify-between text-white">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl left-0">
            <a href="#home" className="cursor-pointer text-white">
              <img className="logo" src={logo} alt="" />
            </a>
          </h1>
        </div>
        <div>
          <ul className="hidden lg:flex text-white justify-center align-middle cursor-pointer text-bold text-xl">
            <li>
              <a
                href="#home"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#pastresult"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Past Results
              </a>
            </li>
            <li>
              <a
                href="#mentor"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Mentors
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#packages"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="#about"
                offset={-200}
                duration={500}
                className="text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#footer"
                offset={-200}
                duration={500}
                className="text-white"
              >
                Preparation Group Links
              </a>
            </li>
            {/* <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li> */}
            {/* <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li> */}
            {/* <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li> */}
            {/* <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li> */}
          </ul>
        </div>
        <div className="hidden lg:flex pr-4">
          <button className="px-8 py-3 text-black hover:text-white visited:text-black">
            <a
              href="https://api.whatsapp.com/send?phone=919560474073&text=Hello%21%20Can%20you%20please%20guide%20me%20with%20-"
              target="blank"
              rel="noreferrer"
              className="text-black hover:text-white no-underline visited:text-black	"
            >
              Contact Us
            </a>
          </button>
        </div>
        <div className="lg:hidden mr-4 mt-4 cursor-pointer z-1000" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-10" /> : <XIcon className="w-10" />}
        </div>

      </div>
      
      <ul
        className={
          !nav
            ? "hidden"
            : " bg-white w-full px-8 cursor-pointer text-center nav-hidden"
        }
      >
        <div className="lg:hidden mr-4 mt-4 cursor-pointer" onClick={handleClick}>
          {nav ?<XIcon className="w-10 text-black z-50"/>:"" }
        </div>
        <li className="border-b-2 border-black w-full">
          <a
            href="#home"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Home
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#pastresult"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Past Results
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#mentor"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Mentors
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#testimonial"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Testimonials
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#packages"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Packages
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#about"
            offset={-200}
            duration={500}
            onClick={handleClose}
            className="text-black"
          >
            About Us
          </a>
        </li>
        <li className="border-b-2 border-black w-full">
          <a
            href="#footer"
            offset={-200}
            duration={500}
            className="text-black"
            onClick={handleClose}
          >
            Group Links
          </a>
        </li>

        <div className="flex flex-col my-4">
          <button className="px-8 py-3 bt-c">
            <a href="http://wa.me/919560474073" target="blank" rel="noreferrer">
              Contact Us
            </a>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
