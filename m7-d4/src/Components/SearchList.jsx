import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function SearchList({ selectedJob, jobList, setSelectedJob }) {
	return (
		<>
			{jobList.map((job) => (
				<Card
					key={job._id}
					onClick={() => setSelectedJob(job)}
					className={
						selectedJob?._id === job._id
							? 'border-thick search-list'
							: 'search-list'
					}
				>
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
		</>
	);
}
