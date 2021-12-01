import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import configureStore, { persistor } from './store/index';
// import { PersistGate } from 'redux-persist/integration/react';
// <Provider store={configureStore}>
// 	<PersistGate persistor={persistor} loading={null}></PersistGate>
// </Provider>;

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
