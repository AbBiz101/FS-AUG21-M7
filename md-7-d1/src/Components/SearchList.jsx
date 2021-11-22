import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
export default function SearchList() {
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetch = async () => {
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?limit=1',
			);
			if (resp.ok) {
				let data = await resp.json();
				setJobList(data);
				setIsLoading(false);
				console.log(jobList);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	return (
		<>
			{isLoading &&
				jobList.map((job) => {
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{job.title}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								{job.job_type}
							</Card.Subtitle>
							<Card.Text>{job.category}</Card.Text>
							<Card.Text>{job.candidate_required_location}</Card.Text>
							<Card.Link href="https://remotive.io/remote-jobs/all-others/technical-delivery-manager-890461">
								{job.company_name}
							</Card.Link>
							<Card.Link href="#">{job.publication_date}</Card.Link>
						</Card.Body>
					</Card>;
				})}
		</>
	);
}
