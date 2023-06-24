import "./PatRes.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "./images";

const PastRes = () => {
  const options = {
    center: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    slidetransition: "linear",
    dots: false,
    loop: true,
    smartSpeed: 500,
    responsive: {
      300: {
        items: 1,
        singleItem: true,
        nav: false,
      },
      680: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  };
  return (
    <div id="pastresult">
      <br />
      <br />

      <div className="sec-title text-center mt-16 past-tb">
        <h2
          className="past-t"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          Past Results
        </h2>
      </div>
      <div
        className="res-mentor"
        id="p"
        style={{ color: "black", marginTop: "-180px" }}
      >
        <OwlCarousel
          id="customer-res"
          className="owl-carousel owl-theme"
          {...options}
        >
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Aastha}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Aastha Guruprasad</div>
            <div className="post">IIM Kozhikode</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Harshita}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Harshita Saraswat</div>
            <div className="post">XLRI Jam</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shweta}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shweta Kamlapurkar</div>
            <div className="post">IIM Udaipur</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Avichal}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Avichal Chopra</div>
            <div className="post">ISB</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Arushi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Arushi Rathi</div>
            <div className="post">IIFT Delhi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shatakshi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shatakshi Bindra</div>
            <div className="post">MDI Gurgaon</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Rohit}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Rohit Kumar</div>
            <div className="post">TISS HRM</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Suneel}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Suneel Popuri</div>
            <div className="post">XLRI Jam</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Abhilash}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Abhilash M.M.</div>
            <div className="post">IIFT Delhi</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Aparna}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Aparna Tiwari</div>
            <div className="post">ISB</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Abhirup}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Abhirup Saha</div>
            <div className="post">IIM Calcutta</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Rishav}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Rishav Chatterjee</div>
            <div className="post">IIFT Delhi</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Ashish}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Ashish Agarwal</div>
            <div className="post">IIM Indore</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Sakshi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Sakshi Rana</div>
            <div className="post">IIM Kozhikode</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Chandni}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Chandani Chugh</div>
            <div className="post">IIFT Kolkata</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Akshay}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Akshay Khanna</div>
            <div className="post">IIFT Delhi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Ambuj}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Ambuj Dhakkad</div>
            <div className="post">IIM Kozhikode</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Nidhi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Nidhi Jha</div>
            <div className="post">IIM Udaipur</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Anudeep}
                alt="team members"
                className="mx-auto img"
                height="1500"
              ></img>
            </div>
            <div className="name3">Anudeep Challa</div>
            <div className="post">IIFT Delhi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Mohammed}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Mohammed Roshan</div>
            <div className="post">IIM Udaipur</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Rajasi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Rajasi Bhadang</div>
            <div className="post">IIFT Kolkata</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Prasan}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Prasan Sulebhavi</div>
            <div className="post">IIM Indore</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Kiran}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Kiran More</div>
            <div className="post">IIFT Kolkata</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Kanishka}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Kanishka Gupta</div>
            <div className="post">IIM Indore</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Dipayan}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Dipayan</div>
            <div className="post">IIM Ranchi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shreya}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shreya Hajra</div>
            <div className="post">IIM Raipur</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.AnuragRajkumar}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Anurag Rajkumar</div>
            <div className="post">IIM Trichy</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Utkarsh}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Utkarsh Khati</div>
            <div className="post">IIFT Delhi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Karthik}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Karthik S.</div>
            <div className="post">IIM Indore</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Varssha}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Varssha</div>
            <div className="post">IIM Trichy</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Aditi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Aditi Kashyap</div>
            <div className="post">IIFT Delhi</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Govindam}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Govindam Rastogi</div>
            <div className="post">IIM Rohtak</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.ShreyaJoshi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shreya Joshi</div>
            <div className="post">IIFT Kolkata</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Vaishnavi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Vaishnavi Grover</div>
            <div className="post">IIM Amritsar</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shubham}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shubham</div>
            <div className="post">IIM Trichy</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Abhijeet}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Abhijeet Rajput</div>
            <div className="post">DBE DU</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Abhinav}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Abhinav Roy</div>
            <div className="post">GLIM Chennai</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Ashish}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Ashish Agarwal</div>
            <div className="post">IIM Indore</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Vidushi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Vidushi Razdan</div>
            <div className="post">TISS HRM</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Syed}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Syed Shayan</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shlok}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shlok Grover</div>
            <div className="post">NMIMS Mumbai</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shivangi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shivangi Jamwal</div>
            <div className="post">IIFT Kolkata</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Khyati}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Khyati Srivastav</div>
            <div className="post">TISS HRM</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Khushi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Khushi Bahl</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Praneet}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Praneet Tandon</div>
            <div className="post">NMIMS Mumbai</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Atigya}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Atigya Tripathi</div>
            <div className="post">IIM Indore</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Juhi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Juhi Chauhan</div>
            <div className="post">IIFT Kolkata</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Aditya}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Aditya Mohanty</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Mansi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Mansi Chitalia</div>
            <div className="post">IIM Indore</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shrey}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shrey</div>
            <div className="post">NMIMS Bang</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Apoorva}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Apoorva Gupta</div>
            <div className="post">IIFT Kolkata</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Anusha}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Anusha Goel</div>
            <div className="post">MDI Gurgaon</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Janhavi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Janhavi Mehta</div>
            <div className="post">MICA</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Pratyush}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Pratyush Dash</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Apoorv}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Apoorv Goel</div>
            <div className="post">SJMSoM, IIT-B</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Aishika}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Aishika Mitra</div>
            <div className="post">MDI Gurgaon</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Divyansh}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Divyansh Agrawal</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Pooja}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Pooja Sharma</div>
            <div className="post">MICA</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Parth}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Parth Mutreja</div>
            <div className="post">SJMSoM, IIT-B</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Payel}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Payel Maity</div>
            <div className="post">XIMB</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Bhargavi}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Bhargavi Agarwal</div>
            <div className="post">SPJIMR</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Nachiket}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Nachiket Sharma</div>
            <div className="post">VGSOM</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Anurag}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Anurag Mohanty</div>
            <div className="post">XIMB</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Akshita}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Akshita Agarwal</div>
            <div className="post">SPJIMR</div>
          </div>

          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Sarthak}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Sarthak Garg</div>
            <div className="post">SIBM Pune</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shaik}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shaik Samiullah</div>
            <div className="post">TAPMI</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Srinibash}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Srinibash Saho</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Shubham}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Shubham Patil</div>
            <div className="post">IIT Jodhpur</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Swapnaneel}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Swapnaneel Mukherjee</div>
            <div className="post">IIMT Gazhiabad</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Abhijit}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Abhijit Jha</div>
            <div className="post">SPJIMR</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Kodukula}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Kodukula Phanish</div>
            <div className="post">NITIE</div>
          </div>
          <div className="team-card">
            <div className="team-box">
              <img
                src={img.Mayur}
                alt="team members"
                className="mx-auto img"
              ></img>
            </div>
            <div className="name3">Mayur Madnani</div>
            <div className="post">SPJIMR</div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default PastRes;
