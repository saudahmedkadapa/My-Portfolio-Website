import './AboutComp.css';
import {Link} from 'react-router-dom';
// import img from '../assets/introImg.avif';
import img2 from '../assets/full-stack-developer-working-computer-it-professional-programmer-coding-website-creation-proccess-computer-technology_277904-5495.avif';

import React from 'react'

const AboutComp = () => {
  return (
    <div>
        <div className='about'>
            <div className='left'>
                <h1>Who am I </h1>
                <p>My name is Saud Ahmed Kadapa .I’m a Full-Stack Developer specializing in building efficient, scalable applications using Java, ReactJS, Spring Boot, and MySQL. With experience in both frontend and backend development, I’ve created projects like the Go Park Parking System and led enterprise-level initiatives. Skilled in cloud deployment (AWS EC2), Docker, and Agile methodologies, I focus on delivering user-centric solutions with a keen eye on performance and security.</p>
                <Link to="/contact">
                <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        {/* <img src={img} className='img' alt=''/> */}
                    </div>
                    <div className='img-stack bottom'>
                        <img src={img2} className='img' alt=''/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutComp
