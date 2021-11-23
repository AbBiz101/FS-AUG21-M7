import './App.css';
import Detail from './Components/Detail';
import { useState, useEffect } from 'react';
import SearchList from './Components/SearchList';
import { Button, Navbar, Card, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
	const [searchVal, setSearchVal] = useState('');
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const submitHandler = async (e) => {
		e.preventDefault();

		let resp = await fetch(
			'https://strive-jobs-api.herokuapp.com/jobs?search=' +
				`${searchVal}` +
				'&limit=5',
		);

		if (resp.ok) {
			const res = await resp.json();
			setJobList(res.data);
			setIsLoading(false);
		} else {
			console.log('error fetching');
		}
	};

	console.log(searchVal);
	console.log(jobList);

	return (
		<>
			<div className="App">
				<Navbar className="navbrContainer" bg="dark" variant="dark">
					<Navbar.Brand className="" href="#home">
						Search for JOB
					</Navbar.Brand>
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

				<div className="big-container">
					<div>
						{!isLoading &&
							jobList.map((job) => (
								<Card key={job._id} className="search-list">
									<Card.Body>
										<Card.Title> Title - {job.title}</Card.Title>
										<Card.Text>Job Type - {job.job_type}</Card.Text>
										<Card.Text>Category - {job.category}</Card.Text>
										<Card.Text>
											Location - {job.candidate_required_location}
										</Card.Text>
										<Card.Text>
											Publication Date - {job.publication_date}
										</Card.Text>
										<Card.Link href="https://remotive.io/remote-jobs/all-others/technical-delivery-manager-890461">
											Company Name - {job.company_name}
										</Card.Link>
									</Card.Body>
								</Card>
							))}

						<SearchList />
					</div>

					<Detail />
				</div>
			</div>
		</>
	);
}
