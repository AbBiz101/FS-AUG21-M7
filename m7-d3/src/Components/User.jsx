import React from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../action/index';
import { Card, Col, Row, Button } from 'react-bootstrap';

const mapStateToProps = (state) => ({ appliedJob: state.user.appliedJob });

const mapDispatchToProps = (dispatch) => ({
	jobRemove: (job) => dispatch(removeJob(job)),
});

function User({ appliedJob, jobRemove }) {
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
											jobRemove(i);
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
