import React from 'react'
import './Header.scss'
import logo from '../../assets/Kwasi-logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    
  return (
      <div className='header'>
          <nav className="header__nav">
              <img src={logo} alt="logo" className='header__nav-logo' />
              <MenuIcon className='header__nav-icon' />
              <MenuIcon className='header__nav-icon' />
          </nav>
    </div>
  )
}

export default Header