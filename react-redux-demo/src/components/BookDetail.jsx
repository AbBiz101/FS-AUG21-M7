import { Col, Row } from 'react-bootstrap';
import { addToCar } from '../action/index';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BookDetail({ bookSelected }) {
	const userName = useSelector((state) => state.user.name);
	const dispatch = useDispatch();
	const [book, setBook] = useState(null);

	useEffect(() => {
		setBook(bookSelected);
	}, [bookSelected]);

	return (
		<div className="mt-3">
			{book ? (
				<>
					<Row>
						<Col sm={12}>
							<h1>{book.title}</h1>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col sm={4}>
							<div className="mt-3">
								<img
									className="book-cover"
									src={book.imageUrl}
									alt="book selected"
								/>
							</div>
						</Col>
						<Col sm={8}>
							<p>
								<span className="font-weight-bold">Description:</span>
								{book.description}
							</p>
							<p>
								<span className="font-weight-bold">Price:</span>
								{book.price}
							</p>
							{userName ? (
								<Button
									color="primary"
									onClick={() => dispatch(addToCar(book))}
								>
									ADD TO CART
								</Button>
							) : (
								<h4>Log in to add to cart!</h4>
							)}
						</Col>
					</Row>
				</>
			) : (
				<Row>
					<Col sm={12}>
						<h3>Please select a book!</h3>
					</Col>
				</Row>
			)}
		</div>
	);
}

export default BookDetail;
