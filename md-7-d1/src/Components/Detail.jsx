import React from 'react';
import { Card, Button } from 'react-bootstrap';
export default function Detail() {
	return (
		<Card className="text-center">
			<Card.Header>Job Title</Card.Header>
			<Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
					With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				<Button variant="primary">Apply</Button>
			</Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
		</Card>
	);
}