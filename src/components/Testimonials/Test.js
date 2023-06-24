import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Test.css";
import img from "./images";

const Test = () => {
  const slider = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    dots: false,
    navigation: {
      nextEl: ".swiper-button-next-test",
      prevEl: ".swiper-button-prev-test",
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="gtco-testimonials" id="testimonial">
      <div className="flex flex-row items-center justify-between px-6 py-4 pb-0 md:px-16 md:py-14 ">
        <div className="py-6 font-rubik md:py-0 mt-5 pr-2">
          <p className="pre_heading mb-2 text-brand text-xl font-medium text-black" 
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          >
            What students say
          </p>
          <p className="md:section_heading text-xl font-bold md:text-[42px] md:font-semibold text-headText text-black "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          >Testimonials:&nbsp;<span>Cohort 2022-24</span></p>
        </div>
        <div className="flex flex-row gap-2">
        <button
            className="grid h-10 w-20 place-content-center rounded-full  text-[#000] text-xl ab z-10"
           onClick={() => slider?.current?.slickPrev()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              ></path>
            </svg>
          </button>
          <button
            className="grid h-10 w-20 place-content-center rounded-full bg-grey-500  text-xl text-[#000] ab bc"
            aria-label="Next"
            onClick={() => slider?.current?.slickNext()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Slider
        {...settings}
        ref={slider}
        className="slider-test overflow-hidden"
      >
     <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Harshita} alt=""></img>
            </div>
          </div>
          </div> 
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Bhargavi} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Varssha} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Janhavi} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Abhijit} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Suneel} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Utkarsh} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Abhirup} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Rishav} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Anudeep} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Aastha} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Vidushi} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Khushi} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Syed} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Shreya} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Akshay} alt=""></img>
            </div>
          </div>
        </div>
        <div>
          <div className="card text-center">
            <div className="box">
              <img src={img.Pooja} alt=""></img>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Test;
