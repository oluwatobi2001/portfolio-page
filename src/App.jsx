
import "./App.css";
import NavBar from './AboutMe/About'
import About from "./NavBar/NavBar";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Contact from "./ContactUs/ContactUs";
import Testimonial from "./Testimonial/Testimonial";
//import Projects from "./Projects/Projects";
import './App.css'




function App() {
  return (
    < div className="bg-container">
      <NavBar />
        <About />
        <Skills />
       <Testimonial />
       <Contact />
        <Footer />
    </div>
  );
}

export default App;
