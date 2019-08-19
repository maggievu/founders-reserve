import React from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import products1 from '../assets/img/products1.png'
import products2 from '../assets/img/products2.png'
import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import product3 from '../assets/img/product3.png'

function Products() {
	return (
		<div className="section-products">
			<Parallax y={[-80, 60]}>
				<div className="bg bg-main">
					<img src={products2} alt="images used in products section" />
				</div>
				<div className="bg bg-bottom">
					<img src={products1} alt="images used in products section" />
				</div>
			</Parallax>

			<div className="bg-overlay bg-overlay-left"></div>

			<div className="products-container">
				<img src={product1} alt="images used in products section" />
				<img src={product2} alt="images used in products section" />
				<img src={product3} alt="images used in products section" />
			</div>

			<h2 className="section-heading">Our products</h2>
		</div>
	)
}

export default Products