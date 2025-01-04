import SkillsList from '../SkillsList/SkillsList'
import checkMarkDark from '../../assets/images/checkmark-light.svg'
import checkMarkLight from '../../assets/images/checkmark-dark.svg'
import './Skills.scss'
import { useTheme } from '../../commonfiles/ThemeContext'


import React from 'react'

function Skills() {
  const { theme } = useTheme();

      const checkMarkIcon = theme === 'light' ? checkMarkDark : checkMarkLight;
    

    return (
        <section id='skills'>
            <div className="skills">
                <h1 className="sectionTitle">Skills</h1>
                <div className="skills__category">
                    <h2 className='skills__category-heading'>Frontend</h2>
                    <div className="skills__category-set">
                        <SkillsList src={checkMarkIcon} skill="HTML" />
                        <SkillsList src={checkMarkIcon} skill="CSS" />
                        <SkillsList src={checkMarkIcon} skill="JavaScript" />
                        <SkillsList src={checkMarkIcon} skill="Canva" />
                        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
                        <SkillsList src={checkMarkIcon} skill="Sass" />
                        <SkillsList src={checkMarkIcon} skill="React" />
                    </div>

                </div>
                <hr />
                <div className="skills__category">
                    <h2 className='skills__category-heading'>Backend</h2>
                    <div className="skills__category-set">
                        <SkillsList src={checkMarkIcon} skill="Node.js" />
                        <SkillsList src={checkMarkIcon} skill="MySQL" />
                        <SkillsList src={checkMarkIcon} skill="Knex" />
                        <SkillsList src={checkMarkIcon} skill="Express" />
                        <SkillsList src={checkMarkIcon} skill="MongoDB" />
                    </div>

                </div>
                <hr />
                <div className="skills__category">
                    <h2 className='skills__category-heading'>Design & Collaboration Tools</h2>
                    <div className="skills__category-set">
                        <SkillsList src={checkMarkIcon} skill="Figma" />
                        <SkillsList src={checkMarkIcon} skill="Github" />
                        <SkillsList src={checkMarkIcon} skill="Jira" />
                    </div>

                </div>
                <hr />
                <div className="skills__category">
                    <h2 className='skills__category-heading'>Content Management & Website Builders</h2>
                    <div className="skills__category-set">
                        <SkillsList src={checkMarkIcon} skill="Wordpress" />
                        <SkillsList src={checkMarkIcon} skill="Webflow" />
                        <SkillsList src={checkMarkIcon} skill="Weebly" />
                        <SkillsList src={checkMarkIcon} skill="Squarespace" />
                        <SkillsList src={checkMarkIcon} skill="Wix" />
                    </div>

                </div>
                <hr />
            </div>


        </section>
    )
}

export default Skills