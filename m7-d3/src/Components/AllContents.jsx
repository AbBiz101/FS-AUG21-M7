import Detail from './Detail';
import SearchList from './SearchList';
import { Row, Col } from 'react-bootstrap';

export default function AllContents({ jobList, setSelectedJob, selectedJob }) {
	return (
		<Row>
			<Col sm={3}>
				<SearchList
					selectedJob={selectedJob}
					jobList={jobList}
					setSelectedJob={setSelectedJob}
				/>
			</Col>
			<Col sm={9}>
				<Detail selectedJob={selectedJob} />
			</Col>
		</Row>
	);
}
