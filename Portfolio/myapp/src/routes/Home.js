import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg from '../Components/Heroimg';
import Footer from '../Components/Footer';
import Skills from '../Components/Skills';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg/>
        <Skills/>
        <ProjectCard/>
        <Footer/>
      
    </div>
  )
}

export default Home
