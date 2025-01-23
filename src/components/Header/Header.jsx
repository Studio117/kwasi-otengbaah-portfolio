import React from 'react'
import './Header.scss'
import logo from '../../assets/Kwasi-logo.svg'
import { LuMenu } from "react-icons/lu";
import { useTheme } from '../../commonfiles/ThemeContext';


function Header() {
  const {theme, toggleThem} = useTheme()
  // const themeBackGround = theme ==='light' ? $background-color : $background-color-dark;
    
  return (
      <div className='header'>
          <nav className="header__nav">
            <div className="header__nav-logoXicon">
              <img src={logo} alt="logo" className='header__nav-logo' />
              <h2 className='header__nav-name'>Kwasi Oteng-Baah</h2>
            </div>
            <LuMenu className='header__nav-icon'/>
          </nav>
    </div>
  )
}


export default Header