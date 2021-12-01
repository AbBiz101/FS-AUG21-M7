import './App.css';
import Album from './components/Album';
import Detail from './components/Detail';
import { BsMusicNoteList } from 'react-icons/bs';
import { useEffect, FormEvent, useState } from 'react';
import { Nav, Form, Button, Navbar, FormControl } from 'react-bootstrap';
function App() {
	const [search, setSearch] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	const [songs, setSongs] = useState<[]>([]);

	const getSong = async (search: string) => {
		try {
			let headers = new Headers({
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
				'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
			});
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem' +
					search,
				{
					method: 'GET',
					headers,
				},
			);
			if (response.ok) {
				let data = await response.json();
				setSongs(data.data);
				console.log(data.data);
			} else {
				console.log("couldn't contact the server :(");
			}
		} catch (error) {
			console.log(error);
		}
	};
	console.log(songs);

	useEffect(() => {
		getSong(search);
	}, []);

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<BsMusicNoteList />
				</Navbar.Brand>
				<Nav className="mr-auto"></Nav>
				<Form onSubmit={handleSubmit} className="search_bar">
					<FormControl
						type="text"
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button type="submit" variant="outline-info">
						Search
					</Button>
				</Form>
			</Navbar>
			<div className="App">
				<div className="side-bar">
					<Detail />
				</div>
				<div className="main-bar">
					{songs.map((song) => {
						<Album song={song} />;
					})}
				</div>
			</div>
		</>
	);
}
export default App;

{
}
