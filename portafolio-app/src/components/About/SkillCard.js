import React from 'react'

const SkillCard = ({el}) => {
    let {name, path, color, level} = el
    const svgSize = name === "Java" ?  '0 -2 30 50'  :  '0 -5 27 50' ;

  return (
    <div className='skill-card'>
        <h2>{name}</h2>
        <h3>Nivel: {level}</h3>
        <svg className='svg-skill' viewBox={svgSize} fill={color}><path d={path} ></path></svg>

    </div>
  )
}

export default SkillCard
