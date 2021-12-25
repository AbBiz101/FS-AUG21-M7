import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from '../Components/CommentArea.jsx';

// export default class SingleBook extends React.Component {
// 	state = { selected: false };
// 	render() {
// 		return (
// 			<>
// 				<Card
// 					style={{
// 						border: this.state.selected ? '3px solid red' : '1px solid',
// 					}}
// 					onClick={() => this.setState({ selected: !this.state.selected })}
// 				>
// 					<Card.Img variant="top" src={this.props.book.img} />
// 					<Card.Body>
// 						<Card.Title>{this.props.book.title}</Card.Title>
// 					</Card.Body>
// 				</Card>
// 				{this.state.selected && <CommentArea asin={this.props.book.asin} />}
// 			</>
// 		);
// 	}
// }

export default function SingleBook() {
	const [selected, setSelected] = useState({ selected: false });
	return (
		<>
			<Card
				style={{
					border: selected ? '3px solid red' : '1px solid',
				}}
				onClick={() => this.setState({ selected: !this.state.selected })}
			>
				<Card.Img variant="top" src={this.props.book.img} />
				<Card.Body>
					<Card.Title>{this.props.book.title}</Card.Title>
				</Card.Body>
			</Card>
			{selected && <CommentArea asin={this.props.book.asin} />}
		</>
	);
}
