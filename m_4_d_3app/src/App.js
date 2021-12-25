import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './Components/BookList';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import WarningSign from './Components/WarningSign';
import Scifi from './data/Scifi.json';

export default function App() {
	return (
		<>
			<WarningSign text="stoooop!" />
			<h4>
				<MyBadge text="This is the badge." color="info" />
			</h4>
			{/* <SingleBook book={Scifi[5]} /> */}
			<BookList books={Scifi} />
		</>
	);
}
