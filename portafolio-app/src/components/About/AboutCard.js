import React from 'react'

const AboutCard = ( {el}) => {
  let {title, subtitle, place, date, content, tools} = el
  return (
    <div className='about-card'>
        <h2 className='about-title' >{title}</h2>
        <h3> {subtitle}</h3>
        <h4> {place}</h4>
        <h5> ({date}) </h5>
        <p>{content}</p>
         
        <h4>Herramientas utilizadas</h4>
        <div className='tools-list'>
            {tools.map((tool, index) => (
                <h6 key={tool} className='tool-card'>{tool}</h6>
            ))}
            
        </div>
        
    </div>
  )
}

export default AboutCard
