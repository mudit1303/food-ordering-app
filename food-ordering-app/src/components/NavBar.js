import React,{useState} from 'react'
import logo from '../assests/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {

    const [showLinks,setShowLinks] = useState(false)

    function click(){
        setShowLinks(!showLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={showLinks ? "open" : "close"}>
            <img src={logo}></img>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <button onClick={click}>
                <ReorderIcon></ReorderIcon>
            </button>
            
        </div>
    </div>
  )
}

export default NavBar