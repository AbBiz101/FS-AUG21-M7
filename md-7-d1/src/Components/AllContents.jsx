import Detail from './Detail';
import SearchList from './SearchList';
import { Row, Col } from 'react-bootstrap';

export default function AllContents(jobList, jobSelected, changeJob) {
	return (
		<Row>
			{console.log(jobList)}
			<Col sm={3}>
				<SearchList jobs={jobList} selected={jobSelected} change={changeJob} />
			</Col>
			<Col sm={9}>
				<Detail selected={jobList} />
			</Col>
		</Row>
	);
}
