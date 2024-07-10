import React from 'react'
import IMAGES from '../../sources'
import AboutCard from './AboutCard';
import "./About.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const links = [
    { 
        title:"Experiencia", 
        subtitle: "Dessarrollador de Software" ,
        place: "Portillo Construcciones S.A.C",
        date: "15/05/2023 - 01/04/2024",
        content: "Colabore con el equipo de desarrollo y los stakeholders para garantizar la entrega de funcionalidades, agregando cualquier cambio que solicite el cliente, empleando la metodologia ágil SCRUM. Tuve el rol de desarrollador backend en el proyecto que consistia en el desarrollo e implementación de un CRM",
        tools: ["Django", "PostgresSQL", "REST-Framework"]

    },

    { 
        title:"Logros academicos", 
        subtitle: "Hackathon Innova Sur",
        place: "Koica",
        date: "09/05/2024",
        content: "Fui finalista en el hackathon organizado por KOICA-UNSA, encargado de implementar la lógica e interfaces del aplicativo móvil. empleando el entorno de Android y Jetpack Compose",
        tools: ["Jetpack Compose", "Android", "AWS"]    
    },   
  ];



function About() {
  return (
  
    <div id='section2'>
       
        <div className='column-cotainer-short'>
            <h1 className='titulos-white'>
                <FontAwesomeIcon className='icon-star' icon={faUser}/>            
                Acerca de mi
            </h1>
            <div className='column-unit-large'>
            <p className='text-about'>
                Hola, soy un desarrolador web, hago uso de tecnologias como Django, HTML, CSS, etc. Me enfoco en convetir ideas en soluciones practicas, buscando siempre mejorar la experiencia del usuario.
                </p>
                {links.map((el) => <AboutCard key={el.title} el={el} />)}
            </div>
            <div className='column-unit-short'>
            <img  className='imagen-unit-short' src={IMAGES.imageFoto} alt='computadora'/>
 
            </div>
        </div>       

    </div>
    
  )
}

export default About
