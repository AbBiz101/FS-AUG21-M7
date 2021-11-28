import BookList from './BookList';
import { Component } from 'react';
import BookDetail from './BookDetail';
import { connect } from 'react-redux';
import { getAllBooks } from '../action';
import { Col, Row, Alert, Spinner } from 'react-bootstrap';

const mapStateToProps = (state) => ({
	bookInStock: state.books.stock,
	bookError: state.books.isError,
	booksLoading: state.books.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
	fetchBooks: () => {
		dispatch(getAllBooks());
	},
});

class BookStore extends Component {
	state = {
		bookSelected: null,
	};
	componentDidMount = async () => {
		this.props.fetchBooks();
	};
	changeBook = (book) => this.setState({ bookSelected: book });

	render() {
		return (
			<Row>
				{this.props.booksLoading ? (
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
						{this.props.bookError ? (
							<Alert md={9} variant="danger">
								This is a fetching error. Checks the endpoint!
							</Alert>
						) : (
							<Col md={4}>
								<BookList
									changeBook={this.changeBook}
									books={this.props.bookInStock}
									bookSelected={this.state.bookSelected}
								/>
							</Col>
						)}
						<Col md={8}>
							<BookDetail bookSelected={this.state.bookSelected} />
						</Col>
					</>
				)}
			</Row>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
