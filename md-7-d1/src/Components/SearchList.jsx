import { Card } from 'react-bootstrap';
export default function SearchList({ props }) {
	return (
		<>
			<Card className="search-list">
				<Card.Body>
					<Card.Title>Title - {props.title}</Card.Title>
					<Card.Text>Job Type - {props.job_type}</Card.Text>
					<Card.Text>Category - {props.category}</Card.Text>
					<Card.Text>Location - {props.candidate_required_location}</Card.Text>
					<Card.Text>Publication Date - {props.publication_date}</Card.Text>
					<Card.Link href="https://remotive.io/remote-jobs/all-others/technical-delivery-manager-890461">
						Company Name - {props.company_name}
					</Card.Link>
				</Card.Body>
			</Card>
		</>
	);
}
