import React from 'react'
import "./HeroSection.scss";
import Header from '../Header/Header';
import heroImage from '../../assets/images/hero-img.png';
import GitHubIcon from '../../assets/images/github-light.svg';
import GitHubIconDark from '../../assets/images/github-dark.svg';
import LinkedInIcon from '../../assets/images/linkedin-light.svg';
import LinkedInIconDark from '../../assets/images/linkedin-dark.svg';
// import InstagramIcon from '../../assets/images/instagram-light.svg';
// import InstagramIconDark from '../../assets/images/instagram-light.svg';
import CV from '../../assets/images/cv.pdf'
import { useTheme } from '../../commonfiles/ThemeContext';
import moonIcon from '../../assets/images/moon.svg'
import sunIcon from '../../assets/images/sun.svg'
import xIconDark from '../../assets/images/twitter-dark.svg'
import xIconLight from '../../assets/images/twitter-light.svg'




function HeroSection() {

  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sunIcon : moonIcon;
  const githubThemeIcon = theme === 'light' ? GitHubIcon : GitHubIconDark;
  const linkedThemeIcon = theme === 'light' ? LinkedInIcon : LinkedInIconDark;
  // const instagramThemeIcon = theme === 'light' ? InstagramIcon : InstagramIconDark;
  const xThemeIcon = theme === 'light' ? xIconLight : xIconDark;

  return (
    <section className='hero'>
      <div className="hero__image-theme">
        <img src={heroImage} alt="profile picture of Kwasi Oteng-Baah" className="hero__image" />

        <img src={themeIcon} onClick={toggleTheme} className='hero__theme-icon'/>
      </div>

      <div className="hero__info">
        <h1 className="hero__name">Kwasi <br /> Oteng-Baah</h1>
        <h2 className="hero__profession">FullStack Developer</h2>
        
        <div className="hero__socials">
          {/* <div className="hero__name-profession"></div> */}
          <a href="https://github.com/Studio117" target="_blank" className="hero__socials-github"><img src={githubThemeIcon} alt="github icon and link" className="hero__github-icon"/></a>

          <a href="https://www.linkedin.com/in/kwasi-otengbaah" target="_blank" className="hero__socials-linkedin"><img src={linkedThemeIcon} alt="github icon and link" className="hero__linkedin-icon"/></a>

          {/* <a href="https://www.instagram.com/kwasiob" className="hero__socials-instagram"><img src={instagramThemeIcon} alt="instagram icon and link" className="hero__instagram-icon"/></a> */}

          <a href="https://x.com/akwasiob" target="_blank" className="hero__socials-instagram"><img src={xThemeIcon} alt="x-twittr icon and link" className="hero__x-twitter-icon"/></a>

        </div>
        <p className='hero__description'>I love creating and buiding beautiful things, I love solving problems, and I love coding - so I build beautiful things to solve problem</p>
        <p>recent grad(oct.2024), so still working on portfolio stuff</p>
          <a href={CV} download={CV}>
            <button className='hero__cv-btn' >Download CV</button>
          </a>

      </div>


    </section>
  )
}

export default HeroSection