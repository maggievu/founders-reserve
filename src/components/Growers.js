import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import mainBg from '../assets/img/growers3.png'
import shovel from '../assets/img/growers1.png'
import dirt from '../assets/img/growers2.png'

function Growers() {
	return (
		<ParallaxBanner
			className='section-growers'
			layers={[
				{
					children: (
						<img className="img-parallax img-main-bg" src={mainBg} alt="background of section growers" />
					),
					amount: 0.15,
				},
				{
					children: (
						<img className="img-parallax img-shovel" src={shovel} alt="a shovel with dirt" />
					),
					amount: -0.25,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax img-dirt" src={dirt} alt="dirt" />
					),
					amount: -0.25,
					expanded: false,
				},
			]}
			style={{
				height: '100vh',
				top: '-30vh'
			}}
		>
			<div className="bg-overlay bg-overlay-left"></div>
			<h2 className="section-heading">Our growers</h2>
		</ParallaxBanner>
	)
}

export default Growers