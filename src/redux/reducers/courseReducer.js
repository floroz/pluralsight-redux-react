import * as actionType from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case actionType.CREATE_COURSE:
			return state.concat(action.course);
		case actionType.LOAD_COURSES_SUCCESS:
			return action.courses;
		default:
			return state;
	}
}
