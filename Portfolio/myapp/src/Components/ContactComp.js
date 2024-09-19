import "./ContactComp.css";
import React from 'react'

const ContactComp = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="your Name"></input>
            <label>Email</label>
            <input type="text" placeholder="your Email Id "></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="type your message"></textarea>
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default ContactComp
