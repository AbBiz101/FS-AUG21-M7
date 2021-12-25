import { Carousel, Col, Row, Container } from 'react-bootstrap';
export default function Home() {
	return (
		<Carousel style={{ maxHeight: '200px', maxWidth: '200px' }}>
			<Carousel.Item interval={1000}>
				<img
					className="d-block w-10vh"
					src="https://source.unsplash.com/random"
					alt="First slide"
					style={{ maxHeight: '200px', maxWidth: '200px' }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className="d-block w-100"
					src="https://source.unsplash.com/random"
					alt="Second slide"
					style={{ maxHeight: '200px', maxWidth: '200px' }}
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className="d-block w-100"
					src="https://source.unsplash.com/random"
					alt="Third slide"
					style={{ maxHeight: '200px', maxWidth: '200px' }}
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
