import './About.css'
import aboutus from '../../assets/aboutUs.png'

const About = () => {
  return (
    <div id="about">
        <section className="about">
            <div className="main">
                <img data-aos="fade-right" data-aos-duration="1500"src={aboutus} alt="" />
                <div className="all-text">
                    <h1 data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000" className="md:mt-16">About Us</h1>
                    <p data-aos="fade-left" data-aos-duration="1500">PrepKare is an initiative providing all-round soft skill-development solutions for professional requirements of the students across India. Conceived by top Management professionals from IMT Ghaziabad, the company always remains committed to its motto of ‘Get Help. Get Hired’.Currently, it is helmed by a team of motivated individuals, committed to create a 
differentiated but insightful experience for every stakeholder we engage to in varied 
capacities.</p>
<p data-aos="fade-left" data-aos-duration="1500">
Our flagship program - CATalysis Prep Program is a differentiated model, which envisions to provide the aspirants the guided path towards their journey to the B-School after their competitive exams like CAT, XAT, SNAP, IIFT, NMAT, MICAT, etc.</p>
<p data-aos="fade-left" data-aos-duration="1500">
Our comprehensive preparatory modules are designed benchmarked to the top Industry standards with appropriate focus on the appropriate academic curriculum. Our training experts and mentors have profound knowledge and diverse industry experience in Top-Tier firms to mould the students from all walks of life. We understand each student’s need and work with them as a partner to lead them to career excellence. We look forward to collaborate with you to achieve the same objective mutually.</p>
                </div>
                </div>
               
        </section>
    </div>
  )
}

export default About