import * as actionType from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch (action.type) {
		case actionType.CREATE_COURSE:
			return state.concat(action.course);
		case actionType.LOAD_COURSES_SUCCESS:
			return action.courses;
		default:
			return state;
	}
}
