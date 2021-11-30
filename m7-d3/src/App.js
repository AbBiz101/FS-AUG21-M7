import './App.css';
import User from './Components/User';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import UserIcon from './Components/UserIcon';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import AllContents from './Components/AllContents';
import { addUserName, getJob, searchJob } from './action/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Row, Button, Navbar, Col, Form, FormControl } from 'react-bootstrap';

const mapStateToProps = (state) => ({
	jobList: state.jobList.list,
	isError: state.jobList.isError,
	isLoading: state.jobList.isLoading,
	searchList: state.jobSearched.searchList,
	searchLoading: state.jobSearched.searchLoading,
	userName: state.user.name,
});

const mapDispatchTOProps = (dispatch) => ({
	addUserName: (name) => {
		dispatch(addUserName(name));
	},
	getJob: () => {
		dispatch(getJob());
	},
});

const App = ({
	jobList,
	getJob,
	isLoading,
	userName,
	appliedJob,
	addUserName,
}) => {
	const [searchVal, setSearchVal] = useState(''); //hold search input value
	const [selectedJob, setSelectedJob] = useState(null); // job selected to display details
	const [username, setUsername] = useState('');
	searchJob(searchVal);
	useEffect(() => {
		getJob();
	}, []);

	return (
		<BrowserRouter>
			<Row>
				<Col sm={12}>
					<Navbar className="navbrContainer" bg="dark" variant="dark">
						<Link to="/">Search for Jobs</Link>
						<UserIcon style={{ color: 'red' }} />

						<Form inline className="searchContainer" onSubmit={searchJob}>
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
				<Route path="/user" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default connect(mapStateToProps, mapDispatchTOProps)(App);
