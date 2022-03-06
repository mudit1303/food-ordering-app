import React,{useState} from 'react'
import logo from '../assests/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import Menu from '../pages/Menu';

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
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={click}>
                <ReorderIcon></ReorderIcon>
            </button>
            
        </div>
    </div>
  )
}

export default NavBar