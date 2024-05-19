import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Ändere dies zu einem named import
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;