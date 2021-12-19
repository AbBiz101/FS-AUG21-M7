import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Details from './components/Details';
import { Carousel, Container, Col, Row } from 'react-bootstrap';

export default function App() {
	return 
		<BrowserRouter>
      
         <MyNavbar/>
     
		   // <Routes>
         //    <Route path="/" component = {< Home />} />
          
         //     <Route path = "/profile" component = {<h1> PROFILE PAGE </h1>} / >
          
         //    <Route path="/reservations" component = {< Booking />} />
          
         //    <Route path = "/menu" component = {< Menu />} />
          
         //     <Route path = "/details/:pastaId" component = {< Details />} />

         //    <Route path = "*" component = {< NotFound />} />
          
         // < /Routes>
    
		</BrowserRouter>
	
}
