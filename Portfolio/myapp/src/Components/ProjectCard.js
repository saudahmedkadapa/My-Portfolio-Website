import './ProjectCard.css';
import img from '../assets/car3.webp';
import img2 from '../assets/polymers-10-01022-g001.webp';
import img3 from '../assets/1691046464-crud-operations-1-crud-operations.avif';
import pdf from '../pdf/SRSReportGoPark.pdf';


import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Project</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={img} alt=''/>
                <h2 className='Project-title'>GoPark</h2>
                <div className='pro-details'>
                    <p>  GoPark has been developed to reduce complexity of parking slots management and booking.Developed a comprehensive Go Park vehicle parking system application from scratch using a full-stack approach with advanced technologies.  </p>
                    <div className='pro-btns'>
                        <NavLink to="https://github.com/saudahmedkadapa/GoPark" className="btn">Source Code</NavLink>
                        <NavLink to={pdf} target="_blank" className="btn">Report</NavLink>
                    </div>
                </div>


            </div>

            <div className='project-card'>
                <img src={img3} alt=''/>
                <h2 className='Project-title'>.NET-MVC-CRUD-Project
                </h2>
                <div className='pro-details'>
                    <p>This repository contains a comprehensive .NET MVC project implementing basic CRUD (Create, Read, Update, Delete) operations. The project serves as an exemplary guide for developers looking to understand the fundamental operations in an ASP.NET MVC application.</p>
                    <div className='pro-btns'>
                        <NavLink to="" className="btn">View</NavLink>
                        <NavLink to="https://github.com/saudahmedkadapa/.NET-MVC-CRUD-Project" className="btn">Source code</NavLink>
                    </div>
                </div>


            </div>

            <div className='project-card'>
                <img src={img2} alt=''/>
                <h2 className='Project-title'>Experimental Investigation And Analysis of Polyester glass fiber rice husk hybrid composite</h2>
                <div className='pro-details'>
                    <p>This project contains the details about the analysis of Hybrid Composites. The hybrid composites have good
 mechanical properties.This project deals with the composites made with the calculated combinations of
 polyester,glass fiber and Rice Husk. The composite is prepared using Compression MoldingProcess and the analysis
 is done by conducting flexural test, tensile test, izod impact test and Rockwell hardness test.</p>
                    <div className='pro-btns'>
                    </div>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default ProjectCard
