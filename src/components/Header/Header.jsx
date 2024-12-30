import React from 'react'
import './Header.scss'
import logo from '../../assets/Kwasi-logo.svg'

function Header() {
    
  return (
      <div>
          <nav className="nav">
              <img src={logo} alt="logo" className='logo' />
          </nav>
    </div>
  )
}

export default Header