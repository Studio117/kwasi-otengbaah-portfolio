import './Projects.scss'
import React from 'react'
import LLVS from '../../assets/images/2lvs-site-snapshot.png'
import burger from '../../assets/images/fresh-burger.png'
import glasses from '../../assets/images/hipsster.png'
import ProjectCard from '../ProjectCard/ProjectCard'

function Projects() {
    return (
        <section id='projects'>
            <div className="projects">
                <h1 className="sectionTitle">Projects</h1>

                <p className='projects__side-note'>...uhm yeah, so the site is under some reworking right now... give me a few minutes, or a month? 😁</p>
                <div className="projects__container">

                    <ProjectCard src={LLVS} href="https://2lvs.com" h3="2LVS Fashion House" p="Fashion company" alt='2LVS website landing page snapshot' />

                    <ProjectCard src={burger} href="https://github.com/Studio117" h3="E-commerce" p="coming soon" alt='coming soon' />

                    <ProjectCard src={glasses} href="https://github.com/Studio117" h3="Some other app" p="coming soon" alt='comming soon' />
                </div>
            </div>




        </section>
    )
}

export default Projects