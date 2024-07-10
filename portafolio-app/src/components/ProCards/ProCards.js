import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Projects.css"
import IMAGES from '../../sources'

const proyects = [
    { 
        name: "CRM - Inmobiliaria Portillo",
        image: IMAGES.imagePortillo,
        linkGit: null,
        linkProyect: "https://erp.portillo.org.pe/",
        description: "Sistema CRM implementado para la empresa Portillo S.A.C.",
        tools: ["Django", "PostgresSql", "REST-Framework"]    
    },
    { 
        name: "Sistema de matriculas",
        image: IMAGES.imageMat,
        linkGit: "https://github.com/jchgabriel-dev/Matriculas-App",
        linkProyect: "https://neon-sunflower-96722b.netlify.app/",
        description: "Sistema para realizar el seguimiento de alumnos matriculados",
        tools: ["CSS", "HTTML", "JavaScript", "React"]
    },
    { 
        name: "Ecommerce Page Product",
        image: IMAGES.imageTiendaHtml,
        linkGit: "https://github.com/jchgabriel-dev/Tienda-HTML",
        linkProyect: "https://main--zesty-alfajores-d8aa07.netlify.app/",
        description: "Pagina web que muestre la vista de un producto",
        tools: ["CSS", "HTTML", "JavaScript"]
    },
    { 
        name: "Organizador de tareas",
        image: IMAGES.imageTask,
        linkGit: "https://github.com/jchgabriel-dev/django-tareas",
        linkProyect: null,
        description: "Sistema para la creacion y listado de tareas cotidianas",
        tools: [ "Django", "CSS", "HTML"]
    },
    { 
        name: "Sistema de almacenes",
        image: IMAGES.imageTiendaDjango,
        linkGit: "https://github.com/jchgabriel-dev/Django-tienda",
        linkProyect: null,
        description: "Sistema para realizar la administracion de una tienda",
        tools: [ "Django", "MySQL", "HTML", "CSS"]
    },
    { 
        name: "Programa de presupuestos",
        image: IMAGES.imagePresupuesto,
        linkGit: "https://github.com/jchgabriel-dev/PresupuestoC",
        linkProyect: null,
        description: "Sistema para desarrollar generar archivos de presupuestos",
        tools: [ "WPF", "C#", "Entity Framework"]
    },

 
]

function ProCards() {
  return (
    <div id='section3'>       
        <div className='container-100'>
            <h1 className='titulos-white'>
                <FontAwesomeIcon className='icon-star' icon={faFolder}/>            
                Proyectos
            </h1>                        
        </div>   
        <div className='skills-total'>
            {proyects.map((el) => 
                <div className='card-proyect' key={el.name}>
                    <h1>{el.name}</h1>
                    <img src={el.image} alt='proyecto'></img>
                    <p>{el.description}</p>                    
                    <div className='links-con'>
                        <a className='project-git' href={el.linkGit}>
                        <FontAwesomeIcon  icon={faGithub}/>            

                        </a>
                        <a className='project-web' href={el.linkProyect} >
                        <FontAwesomeIcon  icon={faGlobe}/>            

                        </a>
                    </div>

                    <h3> TECNOLOGIAS </h3>
                    <div className='project-total'>
                        {el.tools.map((tool) =>
                            <h5 key={tool} className='tools'> {tool}</h5>

                        )}
                    </div>
                </div>

              
            )}
        </div>    
    </div>
  )
}

export default ProCards
