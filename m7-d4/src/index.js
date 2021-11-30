import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from '../src/store/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Provider store={configStore}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
