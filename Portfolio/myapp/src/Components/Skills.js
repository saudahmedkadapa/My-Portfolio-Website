import './Skills.css';
import {Link} from 'react-router-dom';

import React from 'react'

const Middle = () => {
  return (
    <div className='pricing'>
      <h1>Skills</h1>
      <br></br>
      <div className='card-container'>
        <div className='card'>
          <span className='bar'></span>
          <p className='btc'> Java</p>
          <a href='https://github.com/saudahmedkadapa/JavaDataStructures'><p>DataStruture </p></a>
          <p> JDBC</p>
          <p> Hibernate</p>
          <p> Advance Java</p>
          <Link to="https://github.com/saudahmedkadapa/JavaProgramming" className="btn">Demo</Link>
        </div>
        <div className='card'>
          <span className='bar'></span>
          <p className='btc'>DotNet</p>
          <p>C#</p>
          <p>EntityFramework</p>
          <p>MVC</p>
          <Link to="https://github.com/saudahmedkadapa/.NET-MVC-CRUD-Project" className="btn">Demo</Link>
        </div>

        <div className='card'>
          <span className='bar'></span>
          <p className='btc'> C++</p>
          <Link to="https://github.com/saudahmedkadapa/Cpp-Programming-" className="btn">Demo</Link>

        </div>

        <div className='card'>
          <span className='bar'></span>
          <p className='btc'> Database</p>
          <p>MySql</p>
          <p>MongoDb</p>
          <Link to="https://github.com/saudahmedkadapa/Cpp-Programming-" className="btn">Demo</Link>

        </div>

        <div className='card'>
          <span className='bar'></span>
          <p className='btc'> Linux</p>
          <Link to="https://github.com/saudahmedkadapa/Cpp-Programming-" className="btn">Demo</Link>

        </div>

        <div className='card'>
          <span className='bar'></span>
          <p className='btc'> Reactjs</p>
          <p> HTML</p>
          <p> CSS</p>
          <p> Jquery</p>
          <p> Nodejs</p>
          <Link to="https://github.com/saudahmedkadapa/Cpp-Programming-" className="btn">Demo</Link>

        </div>

      </div>

      
    </div>
  )
}

export default Middle
