import React from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default class BookList extends React.Component {
	state = {
		books: [],
		search: '',
	};

	render() {
		return (
			<Container>
				<Row>
					<Form.Control
						type="text"
						placeholder="Search..."
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
					/>
				</Row>
				<Row>
					{this.props.books
						.filter((b) => b.title.toLowerCase().includes(this.state.search))
						.map((bbk) => (
							<Col key={bbk.asin} xs={4}>
								<SingleBook book={bbk} />
							</Col>
						))}
				</Row>
			</Container>
		);
	}
}
