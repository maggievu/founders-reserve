import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import bgColor from '../assets/img/blog1.png'
import sun from '../assets/img/blog2.png'
import cloud from '../assets/img/blog3.png'
import mountain from '../assets/img/blog4.png'

function Blog() {
	return (
		<ParallaxBanner
			className='section-blog'
			layers={[
				{
					children: (
						<img className="img-parallax img-bg-color" src={bgColor} alt="colored background of section blog" />
					),
					amount: 0.15,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax img-sun" src={sun} alt="sunset" />
					),
					amount: 0.35,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax img-cloud" src={cloud} alt="sunset with cloud" />
					),
					amount: 0.3,
					expanded: false,
				},
				{
					children: (
						<img className="img-parallax img-moutain" src={mountain} alt="mountains with sunset" />
					),
					amount: 0.3,
					expanded: false,
				},
			]}
			style={{
				height: '100vh',
				top: '-30vh'
			}}
		>
			<div className="bg-overlay bg-overlay-left-2x"></div>
			<h2 className="section-heading">Read The Blog</h2>
		</ParallaxBanner>
	)
}

export default Blog