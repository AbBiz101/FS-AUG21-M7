import { useState, useEffect } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

export default function NavBar() {
	const [searchVal, setSearchVal] = useState('');
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(searchVal);
		console.log(1111);
		const getjobs = async () => {
			try {
				let resp = await fetch(
					`https://strive-jobs-api.herokuapp.com/jobs?search=${searchVal}&limit=10`,
				);
				if (resp.ok) {
					const res = await resp.json();
					setJobList(res.data);
					setIsLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
	};
	return (
		<Navbar className="navbrContainer" bg="dark" variant="dark">
			<Navbar.Brand className="" href="#home">
				Search for JOB
			</Navbar.Brand>
			<Form inline className="searchContainer">
				<FormControl
					onSubmit={submitHandler}
					className="mr-sm-4"
					type="text"
					placeholder="Search"
					onChange={(e) => {
						setSearchVal(e.target.value);
					}}
				/>
			</Form>
		</Navbar>
	);
}
