import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import configureStore, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<Provider store={configureStore}>
		<PersistGate persistor={persistor} loading={null}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);
reportWebVitals();
