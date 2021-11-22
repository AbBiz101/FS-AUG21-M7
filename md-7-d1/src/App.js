import './App.css';
import Navbar from './Components/NavBar';
import { useState, useEffect } from 'react';
import SearchList from './Components/SearchList';
import Detail from './Components/Detail';

function App() {
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getjobs = async () => {
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?limit=3',
			);
			if (resp.ok) {
				const res = await resp.json();
				setJobList(res.data);
				setIsLoading(false);
				console.log(jobList);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getjobs();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<div className="big-container">
				<div>
					{!isLoading && jobList.map((job) => <SearchList props={job} />)}
				</div>
				<Detail />
			</div>
		</div>
	);
}

export default App;
