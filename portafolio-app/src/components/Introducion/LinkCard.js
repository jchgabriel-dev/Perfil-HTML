import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkCard = ({el}) => {
  let { icon, link, title } = el; 
  return (
    <a className='link-icon' href={link}>
        <FontAwesomeIcon className='link-image' icon={icon}/>      
        {title}
       
    </a>      
          
   
  )
}

export default LinkCard
