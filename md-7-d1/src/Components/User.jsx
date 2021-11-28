import React from 'react';
import { Card } from 'react-bootstrap';

export default function User(jobList) {
	return (
		<div>
			{console.log(jobList.jobs)}
			{jobList.jobs.map((job) => (
				<Card key={job._id}>
					<Card.Body>
						<Card.Title> Title - {job.title}</Card.Title>
						<Card.Text>Job Type - {job.job_type}</Card.Text>
						<Card.Text>Category - {job.category}</Card.Text>
						<Card.Text>Location - {job.candidate_required_location}</Card.Text>
						<Card.Text>Publication Date - {job.publication_date}</Card.Text>
						<Card.Link href="https://remotive.io/remote-jobs/all-others/technical-delivery-manager-890461">
							Company Name - {job.company_name}
						</Card.Link>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}
