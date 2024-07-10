import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IMAGES from '../../sources'


function Footer() {
  return (
    <div className='footer'>
      <h3 >CONTACTOS</h3>
      <br>
      </br>
      <div>
        <a href='https://github.com/jchgabriel-dev'><FontAwesomeIcon className='icon-star' icon={faGithub}/></a>
        <a href='https://www.linkedin.com/in/julian-chile-862989315/'><FontAwesomeIcon className='icon-star' icon={faLinkedin}/></a>
        <a href='mailto:jgabrielchile@example.com'><FontAwesomeIcon className='icon-star' icon={faAt}/></a>
        <a href={IMAGES.pdf}><FontAwesomeIcon className='icon-star' icon={faIdCard}/></a>                                       
      </div>
      <br>
      </br>
    </div>
  )
}

export default Footer
