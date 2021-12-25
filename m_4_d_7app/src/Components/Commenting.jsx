import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Commenting extends React.Component {
	state = {
		Comment: {
			comment: '',
			rate: 1,
			elementID: this.props.asin,
		},
	};
	sendbtn = async (e) => {
		try {
		} catch (error) {}
		e.preventDefault();
		try {
			let resp = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments',
				{
					method: 'POST',
					body: JSON.stringify(this.state.Comment),
					headers: {
						'Content-type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjE0ZDRiYjUzZDAwMTViMTllZDMiLCJpYXQiOjE2MzMyODI0NDksImV4cCI6MTYzNDQ5MjA0OX0.Jt6fmjM4PF3HKpx5GVt5uiUBfLcVPLtvh0xCUThTsfs',
					},
				},
			);
			if (resp.ok) {
				alert('Comment updated!!');
			} else {
				console.log('error');
				alert('Something went cxcxwrong.');
			}
		} catch (error) {
			console.log('error');
		}
	};
	render() {
		return (
			<Form onSubmit={this.sendbtn}>
				<Form.Control
					placeholder="Add Your Comment Here"
					type="text"
					value={this.state.Comment.comment}
					onChange={(e) =>
						this.setState({
							Comment: { ...this.state.Comment, comment: e.target.value },
						})
					}
				/>
				<Form.Control
					onChange={(e) =>
						this.setState({
							Comment: { ...this.state.Comment, rate: e.target.value },
						})
					}
					value={this.state.Comment.rate}
					as="select"
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Form.Control>
				<Button as="input" type="submit" value="Submit" />
			</Form>
		);
	}
}
