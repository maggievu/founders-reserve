import React from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import bgMain from '../assets/img/we_are1.png'
import bgShadow from '../assets/img/we_are2-1.png'

function About() {
	return (
		<ParallaxBanner
			className="section-about"
			layers={[
				{
					children: (
						<img className="img-parallax" src={bgShadow} alt="forest shadow" />
					),
					amount: 0.15,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax" src={bgMain} alt="forest main background" />
					),
					amount: -0.35,
					expanded: false,
				},
			]}
			style={{
				height: '100vh',
				top: '-30vh',
			}}
		>
			<div className="bg-overlay bg-overlay-right"></div>
			<h2 className="section-heading">Who we are</h2>
		</ParallaxBanner>
	)
}

export default About