import './ProjectCard.scss'
import React from 'react'

function ProjectCardIframe({src, href, h3, p}) {
  return (
    <div className="container">
    {/* make sure to put the git hub link of 2LVS here */}
      <a href={ href} target="_blank" >
        <iframe src={src} frameborder="0"></iframe>
        <h3>{ h3}</h3>
        <p>{p}</p>
    </a>
    </div>

  )
  }

export default ProjectCardIframe
