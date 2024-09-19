import "./Heroimg.css";
import IntroImg from '../assets/bgImage.jpeg';
import {Link} from 'react-router-dom';

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" alt="" src={IntroImg}/>
        </div>
        <div className="content">
            <p>Hi ,I'm a </p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project" className="btn" >Project</Link>
                <Link to="/contact" className="btn btn-light" >Contact</Link>
            </div>

        </div>
      
    </div>
  )
}

export default Heroimg

