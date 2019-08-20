import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import mountains from '../assets/img/first_screen2.png'
import mountainsBg from '../assets/img/adventure-alpine-background-355747.png'
import cloudLg from '../assets/img/Image10.png'

function Intro() {
	return (
		<ParallaxBanner
			className='section section-intro'
			layers={[
				{
					children: (
						<img className="img-parallax img-bg-mountains-shadow" src={mountainsBg} alt="mountains background" />
					),
					amount: 0.18,
				},
				{
					children: (
						<img className="img-parallax img-bg-mountains" src={mountainsBg} alt="mountains background" />
					),
					amount: 0.15,
				},
				{
					children: (
						<img className="img-parallax img-mountains" src={mountains} alt="mountains" />
					),
					amount: -0.15,
				},
				{
					children: (
						<img className="img-parallax img-cloud-lg" src={cloudLg} alt="cloud" />
					),
					amount: -0.65,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax img-cloud-lg" src={cloudLg} alt="cloud" />
					),
					amount: -0.8,
					expanded: false,
				},
			]}
			style={{
				height: '100vh',
			}}
		>
			<div className="section-heading-container">
				<h2 className="section-heading" id="intro">Rooted in tradition</h2>
			</div>
		</ParallaxBanner>
	)
}

export default Intro