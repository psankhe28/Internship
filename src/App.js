
import Footer from './components/Footer/Footer';
import Past from './components/Past/PastRes'
import Test from './components/Testimonials/Test'
import Mentors from './components/Mentors/Mentors';
import Packages from './components/Packages/Packages';
import AboutUs from './components/AboutUs/About'
import WhatsApp from './components/WhatsApp/WhatsApp';
import Home from './components/Header/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
      <Home/>
      <Past/>
      <Mentors/>
      <Test/>
      <Packages/>
      <AboutUs/>
      <Footer />
      <WhatsApp/>
    </>
  );
}

export default App;
