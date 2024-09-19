import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import ProjectComp from '../Components/ProjectComp';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectComp heading="GoPark" text="Go Park is an advanced, full-stack parking management system that streamlines parking slot bookings for both users and administrators. The system allows users to view available parking slots, book them in real time, and manage their parking history. Administrators can monitor parking usage, configure parking slots, and track bookings, providing an efficient and seamless experience."/>
      <Footer/>
      
    </div>
  )
}

export default Project
