import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { addUserName, getJob, searchJob } from '../action/index';

const mapStateToProps = (state) => ({
	userName: state.user.name,
	jobList: state.jobList.list,
	searchList: state.jobSearched.searchList,
	searchLoading: state.jobSearched.searchLoading,
});

const mapDispatchTOProps = (dispatch) => ({
	addUserName: (name) => {
		dispatch(addUserName(name));
	},
	getJob: () => {
		dispatch(getJob());
	},
});

function UserIcon({ userName, addUserName }) {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	return (
		<div>
			{userName ? (
				<span onClick={() => navigate('/user')} className="ml-2">
					<BiBriefcaseAlt2
						size={30}
						style={{ color: 'blue', cursor: 'pointer' }}
					/>
				</span>
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
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchTOProps)(UserIcon);
