import React from 'react'
import './SkillsList.scss'

function SkillsList({ src, skill }) {
    return (
        <div id='skillsList'>
            <div className="skillsList">
                <span className='skillsList__item'>
                    <img src={src} alt="check mark" />
                    <p>{skill}</p>
                </span>
            </div>

        </div>
    )
}

export default SkillsList