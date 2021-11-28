import './App.css';
import User from './Components/User';
import { useState, useEffect } from 'react';
import AllContents from './Components/AllContents';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Row, Button, Navbar, Col, Form, FormControl } from 'react-bootstrap';

export default function App() {
	const [jobList, setJobList] = useState([]); // hold all jobs
	const [searchVal, setSearchVal] = useState(''); //hold search input value
	const [isLoading, setIsLoading] = useState(true); // hold load state
	const [selectedJob, setSelectedJob] = useState(null); // job selected to display details

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?search=' +
					`${searchVal}` +
					'&limit=5',
			);

			if (resp.ok) {
				const res = await resp.json();
				console.log('INSIDE RESP.OK submithandler')
				setJobList(res.data);
				setIsLoading(false);
			} else {
				console.log('error fetching');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getJob = async (e) => {
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10',
			);

			if (resp.ok) {
				const res = await resp.json();
				console.log('INSIDE RESP.OK getJob');
				setJobList(res.data);
				setIsLoading(false);
			} else {
				console.log('error fetching');
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(isLoading, jobList);

	useEffect(() => {
		getJob();
	}, []);

	return (
		<BrowserRouter>
			<Row>
				<Col sm={12}>
					<Navbar className="navbrContainer" bg="dark" variant="dark">
						<Link to="/">Search for Jobs</Link>
						<Link to="/user">User</Link>
						<Form inline className="searchContainer" onSubmit={submitHandler}>
							<FormControl
								className="mr-sm-4"
								type="text"
								placeholder="Search"
								onChange={(e) => {
									setSearchVal(e.target.value);
								}}
							/>
							<Button type="submit">Submit</Button>
						</Form>
					</Navbar>
				</Col>
			</Row>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<AllContents
							jobList={jobList}
							selectedJob={selectedJob}
							setSelectedJob={setSelectedJob}
							selectedJob={selectedJob}
						/>
					}
				/>
				<Route path="/users" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}
