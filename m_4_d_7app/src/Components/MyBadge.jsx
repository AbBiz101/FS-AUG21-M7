import { Badge } from 'react-bootstrap';

export default function MyBadge(props) {
	return <Badge variant ={props.color}>{props.text}</Badge>;
}
