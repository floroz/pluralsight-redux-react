import * as actionTypes from './actionTypes';

export const beginApiCall = () => {
	return {
		type: actionTypes.BEGIN_API_CALL
	};
};

export const apiCallError = () => {
	return {
		type: actionTypes.API_CALL_ERROR
	};
};

// export const endApiCalls = () => {
// 	return {
// 		type: actionTypes.END_API_CALL
// 	};
// };
