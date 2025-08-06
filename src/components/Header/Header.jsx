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
      <nav class='header__nav navbar navbar-expand-md'>
        {/* <div className="header__nav-logoXicon"></div> */}
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            {/* Navbar */}
            <img src={logo} alt='logo' className='header__nav-logo' />
            <h2 className='header__nav-name'>Kwasi Oteng-Baah</h2>
          </a>

          <LuMenu
            className='header__nav-icon'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasRight'
            aria-controls='offcanvasRight'
          />

          <div
            class='offcanvas offcanvas-end'
            tabindex='-1'
            id='offcanvasRight'
            aria-labelledby='offcanvasRightLabel'>
            <div class='offcanvas-header'>
              <h5 class='offcanvas-title' id='offcanvasRightLabel'>
                Offcanvas right
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div class='offcanvas-body'>
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>
                    Home for free
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Features
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link disabled' aria-disabled='true'>
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Header