import React from 'react'
import "./HeroSection.scss";
import Header from '../Header/Header';
import heroImage from '../../assets/images/hero-img.png';
import FlareIcon from '@mui/icons-material/Flare';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHubIconDark from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedInIconDark from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import InstagramIconDark from '@mui/icons-material/Instagram';
import CV from '../../assets/images/cv.pdf'

function HeroSection() {
  return (
      <section className='hero'>
          <Header />
          <img src={heroImage} alt="hero-image-of-developer" className="hero__image" />
          <DarkModeIcon />

      <h1 className="nav__my-name">Kwasi <br /> Oteng-Baah</h1>
      <h2 className="nav__info">FullStack Developer</h2>
      <div className="nav__socials">
        <a href="https://github.com/Studio117" className="nav__socials-github"><GitHubIcon /></a>
        <a href="https://github.com/Studio117" className="nav__socials-github-dark"><GitHubIconDark />
        </a>
        <a href="https://www.linkedin.com/in/kwasi-otengbaah" className="nav__socials-linkedin"><LinkedInIcon/></a>
        <a href="https://www.linkedin.com/in/kwasi-otengbaah" className="nav__socials-linkedin-dark"><LinkedInIconDark/></a>
        <a href="https://www.instagram.com/kwasiob" className="nav__socials-instagram"><InstagramIcon/></a>
        <a href="https://www.instagram.com/kwasiob" className="nav__socials-instagram-dark"><InstagramIconDark/></a>
      </div> 
      <span>
        <p>I love creating and buiding beautiful things, i love solving problems, and I love coding - so I build beautiful things to solve problem</p>
        <a href={CV} download={CV}><button >Download CV</button></a>
        
      </span>

    </section>
  )
}

export default HeroSection