import React, { useState } from 'react'
import "./NabBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    
        <nav className='nav'>
            
            <div>
                <FontAwesomeIcon className='main-icon' icon={faPowerOff}/>            
            </div>

            <div className='nav-menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>

            </div>

            <ul className={`ul-nav ${menuOpen ? "open-menu" : ""}`}>
                <li><Link offset={-200} className='nav-link' to='section1' smooth={true} duration={500} spy={true}>
                    Inicio
                </Link></li>
                <li><Link offset={-70}  className='nav-link' to='section2' smooth={true} duration={500} spy={true}>
                    Acerca de mi
                </Link></li>
                <li><Link offset={-70} className='nav-link' to='section3' smooth={true} duration={500} spy={true}>
                    Proyectos
                </Link></li>
            </ul>
          
        </nav>
      

    
  )
}

export default NavBar
