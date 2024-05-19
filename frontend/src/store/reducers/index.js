import { combineReducers } from 'redux';
import authReducer from './authReducer';  // Stelle sicher, dass der Pfad korrekt ist

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;