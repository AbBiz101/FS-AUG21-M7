import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function SearchList({ job }) {
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getjobs = async () => {
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?limit=10',
			);
			if (resp.ok) {
				const res = await resp.json();
				setJobList(res.data);
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getjobs();
	}, []);

	return (
		<>
			{!isLoading &&
				jobList.map((job) => (
					<Card className="search-list">
						<Card.Body>
							<Card.Title> Title - {job.title}</Card.Title>
							<Card.Text>Job Type - {job.job_type}</Card.Text>
							<Card.Text>Category - {job.category}</Card.Text>
							<Card.Text>
								Location - {job.candidate_required_location}
							</Card.Text>
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
