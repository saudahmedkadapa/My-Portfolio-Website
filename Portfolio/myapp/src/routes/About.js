import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import ProjectComp from '../Components/ProjectComp';
import AboutComp from '../Components/AboutComp';

const About = () => {
  return (
    <div>
      <Navbar/>
      {/* <ProjectComp heading="ABOUT." text="I'm FrontEnd Developer"/> */}
      <AboutComp/>
      <Footer/>
    </div>
  )
}

export default About
