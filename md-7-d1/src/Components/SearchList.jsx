import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function SearchList(jobList) {
	const [isLoading, setIsLoading] = useState(true);
	const [listJob, setListJob] = useState([]);
	const [selection, setSelection] = useState(null);

	const changeJob = (job) => ({
		setSelection: job,
	});

	const getJob = async (e) => {
		setListJob(jobList.jobs.jobs);
		setIsLoading(false);
	};

	useEffect(() => {
		getJob();
	}, [changeJob()]);
	return (
		<>
			{console.log(isLoading, listJob)}
			{!isLoading ? (
				listJob.map((job) => (
					<Card
						key={job._id}
						onClick={() => changeJob(job)}
						className={
							selection?._id === job._id
								? 'border-thick search-list'
								: 'search-list'
						}
					>
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
				))
			) : (
				<h3>job loading</h3>
			)}
		</>
	);
}
