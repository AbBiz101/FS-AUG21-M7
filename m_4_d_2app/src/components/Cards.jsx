import React from 'react';
import { Card } from 'react-bootstrap';
import Scifi from '../data/Scifi.json';
export default function Booklist() {
	return (
		<div className="d-flex flex-wrap">
			{Scifi.map((book) => {
				return (
					<Card className="book-cover">
						<img src={book.img} />
						<Card.Body>
							<Card.Title>{book.title}</Card.Title>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}
