import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import bgColor from '../assets/img/blog1.png'
import sun from '../assets/img/blog2.png'
import cloud from '../assets/img/blog3.png'
import mountain from '../assets/img/blog4.png'
// import arrow from '../assets/img/Group 15.svg'

function Blog() {
	return (
		<ParallaxBanner
			className='section section-blog'
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
			}}
		>
			<div className="bg-overlay bg-overlay-left-2x"></div>
			<h2 className="section-heading" id="blog">Read The Blog</h2>
			<div className="content content-left-2x">
				<article className="article">
					<h3 className="article-heading">Porttitor eros Article 1</h3>
					<p>Porttitor eros porttitor pellentesque metus nec donec bahn mi et elementum risus urna sagittis orci nibh. Ultricies malesuada Toms amet enim vitae pellentesque cursus sed vivamus sem congue tattoo pellentesque proin arcu amet quisque.</p>
					<hr />
					<button className="btn btn-continue">CONTINUE</button>
				</article>
				<article className="article">
					<h3 className="article-heading">Porttitor eros Article 2</h3>
					<p>Porttitor eros porttitor pellentesque metus nec donec bahn mi et elementum risus urna sagittis orci nibh. Ultricies malesuada Toms amet enim vitae pellentesque cursus sed vivamus sem congue tattoo pellentesque proin arcu amet quisque.</p>
					<hr />
					<button className="btn btn-continue">CONTINUE</button>
				</article>
			</div>
			<button className="btn btn-read-all">READ ALL ARTICLES</button>
		</ParallaxBanner>
	)
}

export default Blog