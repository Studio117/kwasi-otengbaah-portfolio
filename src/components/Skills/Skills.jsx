
// Backend:
// Node.js
// MySQL
// Knex.js
// Express
// MongoDB

// Frontend:
// HTML
// CSS
// JavaScript
// Canva
// Bootstrap
// Sass
// React

// Design & Collaboration Tools:
// Figma – A design tool for UI/UX design.
// GitHub – A platform for version control and collaborative development.
// Jira – A project management and issue tracking tool.

import React from 'react'

function Skills() {
  return (
      <section className='skill'>
                      <h1 className="sectionTitle">Projects</h1>

<p className='projects__side-note'>recent grad as of oct.2024, so still working on portfolio stuff 😁</p>

<div className="projects__container">
    <ProjectCard src={viberr} href="https://github.com/Studio117" h3="Viberr" p=" Streaming App" />

    <ProjectCard src={burger} href="https://github.com/Studio117" h3="Burger Bar" p=" Streaming App" />

    <ProjectCard src={glasses} href="https://github.com/Studio117" h3="Glasses shop" p=" Streaming App" />
</div>
    </section>
  )
}

export default Skills