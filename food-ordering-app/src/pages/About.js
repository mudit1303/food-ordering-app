import React from 'react'
import AboutImage from '../assests/photo.jpeg'
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${AboutImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Something</p>
        </div>
    </div>
  )
}

export default About