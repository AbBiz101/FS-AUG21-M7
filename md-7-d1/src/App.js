import './App.css';
import Navbar from './Components/NavBar';
import SearchList from './Components/SearchList';
import Detail from './Components/Detail';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function App() {
	
	return (
		<BrowserRouter>
			<div className="App">
				<Link to="/">
					<Navbar />
				</Link>
				<div className="big-container">
					<Routes>
						<Route path="/" element={<SearchList />} />
						<Route path="/company" element={<Detail />} />
					</Routes>

					{/* <div>
							
						</div> */}
				</div>
			</div>
		</BrowserRouter>
	);
}
