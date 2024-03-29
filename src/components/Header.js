import React from 'react'
import logo from '../assets/img/FoundersReserve-Logo-2019_transparent-1.png'

function Header() {
  
  const openMenu = (event) => {
    event.preventDefault()
    document.querySelector(".site-main-navigation").style.left = 0
  }

  const closeMenu = (event) => {
    // event.preventDefault()
    document.querySelector(".site-main-navigation").style.left = '100vw'
  }

  return (
    <header className="site-header">
      <div className="site-header-container">
        <a href="#home"><img className="img-site-logo" src={logo} alt="Founders Reserve Logo" /></a>

        <button className="btn btn-open-menu" aria-label='open menu' onClick={openMenu}>&#9776;</button>

        <nav className="site-main-navigation">
          <button className="btn btn-close-menu" aria-label='close menu' onClick={closeMenu}>&times;</button>
          <a href="#home"><img className="img-site-logo" src={logo} alt="Founders Reserve Logo" /></a>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#products" onClick={closeMenu}>Products</a>
            </li>
            <li>
              <a href="#growers" onClick={closeMenu}>Growers</a>
            </li>
            <li>
              <a href="#blog" onClick={closeMenu}>Blog</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <div className="bg-overlay bg-overlay-left-half"></div>
        </nav>

      </div>
    </header>
  )
}

export default Header