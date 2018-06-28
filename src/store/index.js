import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const configStore = (initialState = {}) => {

	let composeEnhancers = compose;

	composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(
			applyMiddleware(sagaMiddleware),
		),
	);

	sagaMiddleware.run(sagas);

	return store;
}

export default configStore;
