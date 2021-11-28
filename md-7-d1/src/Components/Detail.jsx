import { Card, Row, Col, Button } from 'react-bootstrap';

export default function Detail({ selectedJob }) {
	return (
		<Card className="text-center">
			{selectedJob ? (
				<>
					<Card.Header>Job Title -{selectedJob.title}</Card.Header>
					<Card.Body>
						<Card.Title>Job Type -{selectedJob.job_type}</Card.Title>
						<Card.Title>Category -{selectedJob.category}</Card.Title>
						<Card.Title>
							Location -{selectedJob.candidate_required_location}
						</Card.Title>
						<Card.Title>
							Publication Date -{selectedJob.company_name}
						</Card.Title>
						<Card.Text>{selectedJob.description}</Card.Text>
						<Card.Text>
							{selectedJob.publication_date}--
							{selectedJob.candidate_required_location}
						</Card.Text>
						<Button variant="primary">Apply</Button>
					</Card.Body>
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
