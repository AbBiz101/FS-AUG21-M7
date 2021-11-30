import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore, { persistor } from '../src/store/index';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<Provider store={configStore}>
		<PersistGate persistor={persistor} loading={<div>LOADING...</div>}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
