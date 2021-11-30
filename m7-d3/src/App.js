import './App.css';
import User from './Components/User';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addUserName, getJob, searchJob } from './action/index';
import AllContents from './Components/AllContents';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Row, Button, Navbar, Col, Form, FormControl } from 'react-bootstrap';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
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

const App = ({ jobList, getJob, isLoading, userName, addUserName }) => {
	const [searchVal, setSearchVal] = useState(''); //hold search input value
	const [selectedJob, setSelectedJob] = useState(null); // job selected to display details
	const [username, setUsername] = useState('');
	searchJob(searchVal);
	console.log(isLoading, jobList);
	useEffect(() => {
		getJob();
	}, [searchJob(searchVal)]);

	return (
		<BrowserRouter>
			<Row>
				<Col sm={12}>
					<Navbar className="navbrContainer" bg="dark" variant="dark">
						<Link to="/">Search for Jobs</Link>

						{userName ? (
							<Link to="/user">
								<span className="ml-2">
									<BiBriefcaseAlt2 size={30} />
								</span>
							</Link>
						) : (
							<Form>
								<Row className="align-items-center">
									<Col xs="auto">
										<Form.Control
											className="mb-2"
											id="inlineFormInput"
											placeholder="User Name"
											onChange={(e) => setUsername(e.target.value)}
										/>
									</Col>

									<Col xs="auto">
										<Button
											type="submit"
											className="mb-2"
											onClick={() => addUserName(username)}
										>
											Login
										</Button>
									</Col>
								</Row>
							</Form>
						)}

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
				<Route path="/users" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};

export default connect(mapStateToProps, mapDispatchTOProps)(App);
