import React from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import screen from '../assets/img/first_screen2.png'
import bg1 from '../assets/img/first_screen3.png'
import bg2 from '../assets/img/adventure-alpine-background-355747.png'
import cloudSm from '../assets/img/first_screen1.png'
import cloudLg from '../assets/img/image10.png'
// import Button from 'react-bootstrap/Button'

function Wrapper() {
	return (
		<div className="vertical">
			<div className="container">
				<ParallaxBanner
					className='section-intro'
					layers={[
						{
							image: bg1,
							amount: 0.6,
							expanded: false,
						},
						{
							image: bg2,
							amount: 0.45,
							expanded: false,
						},
						{
							image: screen,
							amount: 0.4,
							expanded: false,
						},
						{
							children: (
								<img className="img-cloud-lg" src={cloudLg} alt="cloud" />
							),
							amount: -0.15,
							expanded: false,
						},
						{
							children: (
								<img className="img-cloud-sm" src={cloudSm} alt="cloud" />
							),
							amount: -0.4,
							expanded: false,
						},
					]}
					style={{
						height: '100vh',
					}}
				>
				</ParallaxBanner>

			</div>
		</div>
	)
}

export default Wrapper