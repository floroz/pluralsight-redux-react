import * as actionType from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState, action) {
	switch (action.type) {
		case actionType.LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
