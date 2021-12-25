import { Alert } from 'react-bootstrap';

export default function WarningSign(props) {
	return <Alert variant="danger"> {props.text} </Alert>;
}
