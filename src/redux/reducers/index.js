import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducers';
import asyncCalls from './apiStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	asyncCalls
});

export default rootReducer;
