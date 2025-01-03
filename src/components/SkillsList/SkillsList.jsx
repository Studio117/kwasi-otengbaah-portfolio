import React from 'react'
import './SkillsList.scss'

function SkillsList({ src, skill }) {
    return (
        <section className='skillsList'>
            <span className='skillsList__item'>
                     <img src={src} alt="check mark" />
            <p>{skill}</p>       
            </span>
        </section>
    )
}

export default SkillsList