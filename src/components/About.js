import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import bgMain from '../assets/img/we_are1.png'
import bgShadow from '../assets/img/we_are2-1.png'

function About() {
	return (
		<ParallaxBanner
			className="section section-about"
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
			}}
		>
			<div className="bg-overlay bg-overlay-right"></div>
			<h2 className="section-heading" id="about">Who we are</h2>
			<div className="content content-right">
				<p>Non sed arcu ipsum mauris sapien skateboard congue nam pharetra nibh quam tellus risus San Francisco sagittis urna. Leo massa adipiscing porttitor odio artisan cursus quam a mauris sed undefined odio wire-rimmed glasses adipiscing et sit pellentesque. Elementum ipsum malesuada skateboard porttitor pharetra eros cursus sagittis eu ornare specs quisque vulputate mauris auctor cursus curabitur. Leo food truck magna arcu massa ligula mattis tellus sagittis DIY fusce rutrum tempus sit arcu quisque. Sem undefined pharetra molestie leo eu duis leo proin you probably haven’t heard of them eget cursus.</p>
			</div>
		</ParallaxBanner>
	)
}

export default About