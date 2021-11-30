import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeJob } from '../action/index';
import { Card, Col, Row, Button } from 'react-bootstrap';

function User() {
	const appliedJob = useSelector((state) => state.user.appliedJob);
	const dispatch = useDispatch();
	return (
		<Row>
			<Col sm={12}>
				<ul style={{ listStyle: 'none' }}>
					{appliedJob.map((job, i) => (
						<li key={i}>
							<Card style={{ width: '18rem', margin: '10px' }}>
								<Card.Body>
									<Card.Title>{job.title}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										{job.category}
									</Card.Subtitle>
									<Card.Text>{job.title}</Card.Text>
									<Button
										variant="danger"
										onClick={() => {
											dispatch(removeJob(i));
										}}
									>
										Remove
									</Button>
								</Card.Body>
							</Card>
						</li>
					))}
				</ul>
			</Col>
		</Row>
	);
}

export default User;
