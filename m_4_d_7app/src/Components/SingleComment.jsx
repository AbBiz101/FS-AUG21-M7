import { ListGroup } from 'react-bootstrap';
export default function SingleComment({ comment }) {
    return <ListGroup.Item >{comment.comment}</ListGroup.Item>;
}
