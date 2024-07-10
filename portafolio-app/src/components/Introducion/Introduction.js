import React from 'react'
import "./Introducion.css"
import IMAGES from '../../sources'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAt, faIdCard, faBell } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import LinkCard from './LinkCard'



const links = [
  { icon: faGithub, link: 'https://github.com/jchgabriel-dev', title:"GITHUB" },
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/julian-chile-862989315/', title:"LINKEDIN" },
  { icon: faAt, link: 'mailto:jgabrielchile@example.com', title:"GMAIL" },
  { icon: faIdCard, link: IMAGES.pdf, title:"CV",}
];


const Introduction = () => {
  return (
    <div className='column-cotainer' id="section1">

      <div className='column-unit image-display'>
        <div className='imageWrapper'>
        <img  className='imagen-unit' src={IMAGES.imageComputer} alt='computadora'/>

        </div>

      </div>
      <div className='column-unit '>
      <h1 className='title-name'>Julian Gabriel Chile Nina 
        <p className='title-ocu'>  
         <FontAwesomeIcon className='icon-star' icon={faStar}/>            
           Desarrollador web</p>  
      </h1>

      <h1 className='title-main ' >Desarrollando el futuro línea por línea</h1>
        <div className='white-section'>        
            Como desarrollador web, me gusta traer ideas a la realidad, para solucionar problemas mediante el uso de tecnologia. Me enfoco en crear programas prácticos y fáciles de usar, para mejorar la experiencia del usuario. Estoy compremetido en utilizar las tecnologias emergentes para ofrecer resultados excepcionales a mis clientes y usuarios finales        
        </div>      

        <div className='links-container'>
          <div className='link-block'>
          <FontAwesomeIcon  className='icon-star' icon={faBell}/>    
          <p>CONTACTOS</p>    
          <FontAwesomeIcon  className='icon-star' icon={faBell}/>    
          </div>
          <div className='link-items'>
            {links.map((el, index) => <LinkCard key={index} el={el} />)}
          </div>
          
        </div>



      </div>              
    </div>
  )
}

export default Introduction

