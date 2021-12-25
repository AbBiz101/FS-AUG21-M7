import React from 'react';
import { Card } from 'react-bootstrap';

export default class SingleBook extends React.Component {
	state = { selected: false };
	render() {
		return (
			<Card
				style={{ border: this.state.selected ? '3px solid red' : '1px solid' }}
				onClick={() => this.setState({ selected: !this.state.selected })}
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}
