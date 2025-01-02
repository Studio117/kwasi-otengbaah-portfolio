import './Projects.scss'
import React from 'react'
import viberr from '../../assets/images/viberr.png'
import burger from '../../assets/images/fresh-burger.png'
import glasses from '../../assets/images/hipsster.png'
import ProjectCard from '../ProjectCard/ProjectCard'

function Projects() {
    return (
        <section id='projects' className='projects'>
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

export default Projects