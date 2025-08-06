import React from 'react'
import './ProjectCard.scss'

function ProjectCard({src, href, h3, p, alt }) {
  return (
    <section className="container">
      <a href={ href} target="_blank" ><img src={src} alt={alt} />
        <h3>{ h3}</h3>
        <p>{p}</p>
    </a>
</section>
  )
}

export default ProjectCard 