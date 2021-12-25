import './App.css';
import './Style/home.css';
import './Style/style.css';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';
function App() {
	return (
		<div className="container-fluid m-0 main-body">
			<div className="row main">
				<SideNav />
				<Footer />
			</div>
		</div>
	);
}
export default App;
