const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE'; //this is the action
const BUY_ICECREAM = 'BUY_ICECREAM'; //this is the action
//this is the action  creator
function buycake() {
	return {
		type: BUY_CAKE,
		info: 'First redux action',
	};
}
function buyicecream() {
	return {
		type: BUY_ICECREAM,
		info: 'First redux action',
	};
}
//-------------------------------single reducer--------------------------------------

//this is the reducer. it is possible to use single reducer in one app but is is better to use multiple reducers, in that case ew have to define the initial states separately as well
// const initialState = { numOfCake: 10, numOfIceCreams: 20 }; // this is the initial state
// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return { ...state, numOfCake: state.numOfCake - 1 };
// 		case BUY_ICECREAM:
// 			return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
// 		default:
// 			return state;
// 	}
//  };
// const store = createStore(reducer); // the store has 1 param which is the reducer coz it has the initial sate
// console.log('Initial state', store.getState()); // will give us the initial state if there is any transition, will give us the val after the transition
// const unsubscribe = store.subscribe(() =>
// 	// i dont really understand this
// 	console.log('Updated state', store.getState()),
// );

//-------------------------------multiple reducers--------------------------------------

const initialCakes = { numOfCake: 10 };
const initialIceCreams = { numOfIceCreams: 20 };

const cakeReducer = (state = initialCakes, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return { ...state, numOfCake: state.numOfCake - 1 };
		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreams, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
		default:
			return state;
	}
};

const rootReducer = combineReducer({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state', store.getState()); // will give us the initial state if there is any transition, will give us the val after the transition
const unsubscribe = store.subscribe(() => {});

store.dispatch(buycake()); // this takes the action creator as a param
store.dispatch(buyicecream());
store.dispatch(buycake()); // this takes the action creator as a param
store.dispatch(buyicecream());
unsubscribe();
