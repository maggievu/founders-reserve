import React from 'react'
import './App.scss'
import { ParallaxProvider } from 'react-scroll-parallax'
import Intro from './components/Intro'
import Products from './components/Products'
import About from './components/About'
import Growers from './components/Growers'
import Blog from './components/Blog'

function App() {
	return (
		<ParallaxProvider>
			<div class="main-container">
				<Intro />
				<Products />
				<About />
				<Growers />
				<Blog />
			</div>
		</ParallaxProvider>
	)
}

export default App
