import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import mainBg from '../assets/img/growers3.png'
import shovel from '../assets/img/growers1.png'
import dirt from '../assets/img/growers2.png'

function Growers() {
	return (
		<ParallaxBanner
			className='section section-growers'
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
			}}
		>
			<div className="bg-overlay bg-overlay-left"></div>
			<h2 className="section-heading" id="growers">Our growers</h2>
			<div className="content content-right">
				<p>
					Porttitor eros porttitor pellentesque metus nec donec bahn mi et elementum risus urna sagittis orci nibh. Ultricies malesuada Toms amet enim vitae pellentesque cursus sed vivamus sem congue tattoo pellentesque proin arcu amet quisque.
				</p>
				<hr />
				<p className="author"><small>Mike Brown</small></p>
				<p><small><em>British Columbia grower</em></small></p>
			</div>
		</ParallaxBanner>
	)
}

export default Growers