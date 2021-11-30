import { connect } from 'react-redux';
import { appliedJob } from '../action/index';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const mapStateToProps = (state) => ({
	userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
	applyJob: (job) => {
		dispatch(appliedJob(job));
	},
});

const Detail = ({ userName,selectedJob, applyJob }) => {
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
						<Button onClick={() => applyJob(selectedJob)} variant="primary">
							{userName ? (
								<Button color="primary">Apply</Button>
							) : (
								<h4>Log in required!</h4>
							)}
						</Button>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
