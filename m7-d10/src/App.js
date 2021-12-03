import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ThirtyDays from './components/ThirtyDays';
import SixteenDays from './components/SixteenDays';
import Hourly from './components/Hourly';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/hourly" element={<Hourly />} />
				<Route path="/16day" element={<SixteenDays />} />
				<Route path="/30day" element={<ThirtyDays />} />
			</Routes>
		</BrowserRouter>
	);
}
