import './Projects.scss'
import React from 'react'
import viberr from '../../assets/images/viberr.png'
import LLVS from '../../assets/images/2lvs-site-snapshot.png'
import burger from '../../assets/images/fresh-burger.png'
import glasses from '../../assets/images/hipsster.png'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardIframe from '../ProjectCard/ProjectCardIframe'

function Projects() {
    return (
        <section id='projects'>
            <div className="projects">
                <h1 className="sectionTitle">Projects</h1>

                <p className='projects__side-note'>recent grad as of oct.2024, so still working on portfolio stuff 😁</p>
                <div className="projects__container">
                    
                    <ProjectCard src={LLVS} href="https://github.com/Studio117" h3="2LVS Fashion House" p="Fashion company" />

                    <ProjectCard src={burger} href="https://github.com/Studio117" h3="E-commerce" p="coming soon" />

                    <ProjectCard src={glasses} href="https://github.com/Studio117" h3="Some other app" p="coming soon" />
                </div>
            </div>




        </section>
    )
}

export default Projects