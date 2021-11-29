import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import configStore from './store/index.js';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={configStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
reportWebVitals();
