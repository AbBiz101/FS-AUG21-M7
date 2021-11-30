import './index.css';
import App from './App';
import '../src/style/index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore, { persistor } from '../src/store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
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
