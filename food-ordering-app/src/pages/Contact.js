import React from 'react'
import '../styles/contact.css'
import ContactImage from '../assests/fooda.jpeg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${ContactImage})`}}></div>
        <div className='rightSide'>
            <h1>Contact US</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name : </label>
                <input name="name" type="text" placeholder='Enter Your Name'></input>
                <label htmlFor='email'>Email : </label>
                <input name="email" type="email" placeholder='Enter Your Email'></input>
                <label htmlFor='message'>Message : </label>
                <input name="name" type="text" placeholder='Enter Your Message'></input>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact