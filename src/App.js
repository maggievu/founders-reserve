import React, { useEffect } from 'react'
import './App.scss'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Intro from './components/Intro'
import Products from './components/Products'
import About from './components/About'
import Growers from './components/Growers'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {

  const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 1) {
        window.scrollBy({
          top: document.querySelector(".section-" + entry.target.id).getBoundingClientRect().top,
          left: 0,
          behavior: 'smooth'
        })
      } else {
      }
    });
  }
  
  useEffect(() => {
    const intersectionOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver(intersectionCallback, intersectionOptions)
  
    const targets = document.querySelectorAll('.section-heading')
    // observer.observe(target)
    targets.forEach(target => {
      observer.observe(target);
    })
  }, [])

  return (
    <ParallaxProvider>
      <div id="home" className="main-container">
        <Header />
        <Intro />
        <Products />
        <About />
        <Growers />
        <Blog />
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default App
