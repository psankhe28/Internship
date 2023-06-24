import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "./images";
import "./Mentors.css";

const Mentors = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    arrow: false,
    prevArrow: null,
         nextArrow: null,
    speed: 500,
    // autoplay: true,
    autoplaySpeed:5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="mentors" id="mentor">
      <div className="flex flex-row items-center justify-between px-6 py-4 pb-0 md:px-16 md:py-14">
      <div className="py-6 font-rubik md:py-0 mt-5 px-2">
          <p className="md:section_heading text-4xl font-bold md:text-[42px] md:font-bold text-headText text-black"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          >Mentors
          </p>
          
        </div>
        <div className="flex flex-row gap-4">
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
          <Slider {...settings} ref={slider} className="slider-ment">
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.RushiDeshpande} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Rushi Deshpande</h3>
            <h4>SPJIMR | Marketing</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Swapnil} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Swapnil Roy</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>2nd Year, '23 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.AayushiBatra} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Ayushi Batra</h3>
            <h4>SPJIMR | Finance</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.HridayMaini} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Hriday Maini</h3>
            <h4>SPJIMR | Finance</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.GhanshyamDave} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Ghanshyam Dave</h3>
            <h4>SPJIMR | Ops/SCM</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.LakshmiNarayan} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Lakshmi Narayan</h3>
            <h4>SPJIMR | Ops/SCM</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Arun} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Arun</h3>
            <h4>SPJIMR | Ops/SCM</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.ChaitnyaBhambi} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Chaitanya Bhambi</h3>
            <h4>IMT-G | Ops/ Marketing</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.GauravTripathi} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Gaurav Tripathi</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.KaiwalyaDeshpande} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Kaiwalya D.</h3>
            <h4>SPJIMR | Marketing</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.VaibhavSharma} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Vaibhav Sharma</h3>
            <h4>XLRI Jamshedpur | BM</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.AbhishekBhattacharya}alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2" style={{fontSize:'18px'}}>Abhishek Bhattacharya</h3>
            <h4>IIM Kashipur</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.HimadriShekhar} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Himadri Goswami</h3>
            <h4>XIMB | BM</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.SiddharthMishra}alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Siddharth Mishra</h3>
            <h4>XIMB | BM</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Nivethitha} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Nivethitha</h3>
            <h4>IIFT Delhi | Marketing, IB</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.AviralAgarwal} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Aviral Agarwal</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.RuchirPuri} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Ruchir Puri</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.VishalMalpani} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Vishal Malpani</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.RohitC} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Rohit C</h3>
            <h4>TISS | ODCL</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.PushkarYeola} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Pushkar Yeola</h3>
            <h4>TISS | ODCL</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.SiddhantJain} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Siddhant Jain</h3>
            <h4>TISS | HRM & LR</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Shashank_MICA} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Shashank</h3>
            <h4>MICA | Marketing</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.DrisyaRadhakrishnan} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Drisya Radhakrishnan</h3>
            <h4>IMT-G | Finacne</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.ShauryaJaiswal} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Shaurya Jaiswal</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.AnubhavGoel} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Anubhav Goel</h3>
            <h4>MICA | Marketing</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.AnkitaPatil} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Ankita Patil</h3>
            <h4>IIFT Delhi | Marketing, IB</h4>
            <h4>2nd year, '23 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Karishma} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Karishma Agarwal</h3>
            <h4>IIM Kozhikode</h4>
            <h4>Alum, '21 Batch</h4>
          </div>
        </div>{" "}
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.SomnathBanerjee} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Somnath Banerjee</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>2nd Year, '23 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.ShikharSaxena} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Shikhar Saxena</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.SimranKohli} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Simran Kohli</h3>
            <h4>IMT-G | Marketing</h4>
            <h4>Alum, '20 Batch</h4>
          </div>
        </div>
        <div className="card1 swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>

            <div className="card-image">
              <img src={img.Akshay} alt="" className="card-img" />
            </div>
          </div>

          <div className="card-content">
            <h3 className="name2">Akshay Virmani</h3>
            <h4>IIFT Delhi | Marketing,IB</h4>
            <h4>Alum, '22 Batch</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Mentors;
