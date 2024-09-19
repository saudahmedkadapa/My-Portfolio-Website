import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import ProjectComp from '../Components/ProjectComp';
import ContactComp from '../Components/ContactComp';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      {/* <ProjectComp heading="CONTACT." text="LETs Have Chat"/> */}
      <ContactComp/>
      <Footer/>
      
    </div>
  )
}

export default Contact
