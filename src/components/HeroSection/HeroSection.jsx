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
      <img src={heroImage} alt="profile picture of Kwasi Oteng-Baah" className="hero__image" />

      <img src={themeIcon} onClick={toggleTheme} />

      <h1 className="nav__my-name">Kwasi <br /> Oteng-Baah</h1>
      <h2 className="nav__info">FullStack Developer</h2>
      <div className="nav__socials">
        <a href="https://github.com/Studio117" className="nav__socials-github"><img src={githubThemeIcon} alt="github icon and link" /></a>


        <a href="https://www.linkedin.com/in/kwasi-otengbaah" className="nav__socials-linkedin"><img src={linkedThemeIcon} alt="github icon and link" /></a>


        {/* <a href="https://www.instagram.com/kwasiob" className="nav__socials-instagram"><img src={instagramThemeIcon} alt="github icon and link" /></a> */}

        <a href="https://www.instagram.com/kwasiob"  className="nav__socials-instagram"><img src={xThemeIcon} alt="github icon and link" /></a>

      </div>
      <span>
        <p>I love creating and buiding beautiful things, I love solving problems, and I love coding - so I build beautiful things to solve problem</p>
        <a href={CV} download={CV}><button >Download CV</button></a>

      </span>

    </section>
  )
}

export default HeroSection