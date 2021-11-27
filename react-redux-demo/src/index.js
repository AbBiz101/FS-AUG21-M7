import './index.css';
import App from './App';
import '../src/style/index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from '../src/store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Provider store={configStore}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
