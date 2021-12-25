import React from 'react';
import { Form } from 'react-bootstrap';

export default function ExpensFilter(props) {
    const dropdownHandler = (event) => {
        props.onFilter(event.target.value);
	};
	return (
		<div className="expenses-filter">
			<Form.Group
				className="expenses-filter__control"
			>
				<label>Filter by year</label>
                <Form.Control className="col-3 px-4" onChange={dropdownHandler} as="select">
					<option >2021</option>
					<option>2020</option>
					<option>2019</option>
					<option>2018</option>
				</Form.Control>
			</Form.Group>
		</div>
	);
}
