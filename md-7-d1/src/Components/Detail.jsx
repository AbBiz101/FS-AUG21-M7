import { Card, Row, Col, Button } from 'react-bootstrap';

export default function Detail(selectedJob) {
	return (
		<Card className="text-center">
			{!selectedJob ? (
				<>
					<Card.Header>{selectedJob.title}</Card.Header>
					<Card.Body>
						<Card.Title>{selectedJob.job_type}</Card.Title>
						<Card.Title>{selectedJob.category}</Card.Title>
						<Card.Title>{selectedJob.candidate_required_location}</Card.Title>
						<Card.Title>{selectedJob.company_name}</Card.Title>
						<Card.Text>{selectedJob.description}</Card.Text>
						<Button variant="primary">Apply</Button>
					</Card.Body>
					<Card.Footer className="text-muted">
						{selectedJob.candidate_required_location}
					</Card.Footer>
				</>
			) : (
				<Row>
					<Col sm={12}>
						<h3>Please select a job</h3>
					</Col>
				</Row>
			)}
		</Card>
	);
}
