import * as actionType from '../actions/actionTypes';

export default function authorReducer(state = [], action) {
	switch (action.type) {
		case actionType.LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
