import BookList from './BookList';
import BookDetail from './BookDetail';
import { getAllBooks } from '../action';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Alert, Spinner } from 'react-bootstrap';

function BookStore() {
	const bookInStock = useSelector((state) => state.books.stock);
	const bookError = useSelector((state) => state.books.isError);
	const booksLoading = useSelector((state) => state.books.isLoading);
	const dispatch = useDispatch();
	const [bookSelected, setBookSelected] = useState(null);

	useEffect(() => {
		dispatch(getAllBooks());
	}, []);

	const changeBook = (book) => setBookSelected(book);

	return (
		<Row>
			{booksLoading ? (
				<Spinner
					animation="border"
					role="status"
					style={{
						height: '100px',
						width: '100px',
						position: 'absolute',
						top: '50%',
						left: '50%',
					}}
				>
					<span className="sr-only">Loading...</span>
				</Spinner>
			) : (
				<>
					{bookError ? (
						<Alert md={9} variant="danger">
							This is a fetching error. Checks the endpoint!
						</Alert>
					) : (
						<Col md={4}>
							<BookList
								changeBook={changeBook}
								books={bookInStock}
								bookSelected={bookSelected}
							/>
						</Col>
					)}
					<Col md={8}>
						<BookDetail bookSelected={bookSelected} />
					</Col>
				</>
			)}
		</Row>
	);
}

export default BookStore;
