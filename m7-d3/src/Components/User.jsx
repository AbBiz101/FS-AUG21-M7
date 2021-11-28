import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { removeJob } from '../action/index';
const mapStateToProps = (state) => ({ jobList: state.jobList });
const mapDispatchToProps = (dispatch) => ({
	jobRemove: (job) => dispatch(removeJob(job)),
});

function User({ jobList, jobRemove }) {
	return (
		<Row>
			<Col sm={12}>
				<ul style={{ listStyle: 'none' }}>
					{jobList.map((job, i) => (
						<li className={i}>
							<Button
								variant="danger"
								onClick={() => {
									jobRemove(i);
								}}
							>
								Remove
							</Button>
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{job.title}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										{job.category}
									</Card.Subtitle>
									<Card.Text>{job.title}</Card.Text>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
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
