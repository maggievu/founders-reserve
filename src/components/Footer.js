import React from 'react'
import logo from '../assets/img/FoundersReserve-Logo-2019_transparent-1.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <img className="img-site-logo" src={logo} alt="Founders Reserve Logo" />
        <nav className="site-footer-navigation">
          <ul>
            <li>
              <a href="#licensing">Licensing</a>
            </li>
            <li>
              <a href="privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer