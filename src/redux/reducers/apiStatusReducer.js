import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
	return type.substring(type.length - 8) === '_SUCCESS';
}

export const apiStatusReducer = (state = initialState.asyncCalls, action) => {
	if (action.type === actionTypes.BEGIN_API_CALL) {
		return state + 1;
	} else if (
		action.type === actionTypes.API_CALL_ERROR ||
		actionTypeEndsInSuccess(action.type)
	) {
		return state - 1;
	}
	return state;
};

export default apiStatusReducer;
