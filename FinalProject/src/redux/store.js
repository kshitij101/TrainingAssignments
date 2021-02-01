import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga';
import rootReducer from './reducers/rootReducer';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;