import BookList from './BookList';
import { Component } from 'react';
import BookDetail from './BookDetail';
import { connect } from 'react-redux';
import { getAllBooks } from '../action';
import { Col, Row } from 'react-bootstrap';

const mapStateToProps = (state) => ({
	bookInStock: state.books.stock,
	bookError: state.books.isError,
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
				{this.props.bookError ? (
					<div>ERROR WHILE FETCHING</div>
				) : (
					<>
						<Col md={4}>
							<BookList
								changeBook={this.changeBook}
								books={this.props.bookInStock}
								bookSelected={this.state.bookSelected}
							/>
						</Col>

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
