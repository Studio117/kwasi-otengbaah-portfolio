import SkillsList from '../SkillsList/SkillsList'
import checkMark from '../../assets/images/checkmark-dark.svg'
import './Skills.scss'


import React from 'react'

function Skills() {
    return (
        <section id='skills'>
            <div className="skills">
                <h1 className="sectionTitle">Skills</h1>
            <div className="skills__category">
                <h2 className='skills__category-heading'>Frontend</h2>
                <div className="skills__category-set">
                    <SkillsList src={checkMark} skill="HTML" />
                    <SkillsList src={checkMark} skill="CSS" />
                    <SkillsList src={checkMark} skill="JavaScript" />
                    <SkillsList src={checkMark} skill="Canva" />
                    <SkillsList src={checkMark} skill="Bootstrap" />
                    <SkillsList src={checkMark} skill="Sass" />
                    <SkillsList src={checkMark} skill="React" />
                </div>

            </div>
            <hr />
            <div className="skills__category">
                <h2 className='skills__category-heading'>Backend</h2>
                <div className="skills__category-set">
                    <SkillsList src={checkMark} skill="Node.js" />
                    <SkillsList src={checkMark} skill="MySQL" />
                    <SkillsList src={checkMark} skill="Knex" />
                    <SkillsList src={checkMark} skill="Express" />
                    <SkillsList src={checkMark} skill="MongoDB" />
                </div>

            </div>
            <hr />
            <div className="skills__category">
                <h2 className='skills__category-heading'>Design & Collaboration Tools</h2>
                <div className="skills__category-set">
                    <SkillsList src={checkMark} skill="Figma" />
                    <SkillsList src={checkMark} skill="Github" />
                    <SkillsList src={checkMark} skill="Jira" />
                </div>

            </div>
            <hr />
            <div className="skills__category">
                <h2 className='skills__category-heading'>Content Management & Website Builders</h2>
                <div className="skills__category-set">
                    <SkillsList src={checkMark} skill="Wordpress" />
                    <SkillsList src={checkMark} skill="Webflow" />
                    <SkillsList src={checkMark} skill="Weebly" />
                    <SkillsList src={checkMark} skill="Squarespace" />
                    <SkillsList src={checkMark} skill="Wix" />
                </div>

            </div>
            <hr />
            </div>
            

        </section>
    )
}

export default Skills