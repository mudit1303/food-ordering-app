import React from 'react'
import {Data} from '../data/data'
import MenuItem from '../components/MenuItem'
import '../styles/menu.css'

function Menu() {
  return (
    <div className='menu'>
        <div className='menuTitle'>
            <div className='menuList'>
                {Data.map((menuitem,key)=>{
                    return(
                            <MenuItem key={key} image={menuitem.image} name={menuitem.name} price={menuitem.price}></MenuItem>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Menu