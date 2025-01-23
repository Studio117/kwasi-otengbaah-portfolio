import React from 'react'
import './ProjectCard.scss'

function ProjectCard({src, href, h3, p }) {
  return (
    <section className="container">
    {/* make sure to put the git hub link of 2LVS here */}
      <a href={ href} target="_blank" ><img src={src} alt="2LVS website landing page snapshot" />
        <h3>{ h3}</h3>
        <p>{p}</p>
    </a>
</section>
  )
}

export default ProjectCard