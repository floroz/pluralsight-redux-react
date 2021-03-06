import * as actionType from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadAuthorSuccess = authors => {
	return {
		type: actionType.LOAD_AUTHORS_SUCCESS,
		authors
	};
};

export const loadAuthors = () => {
	return dispatch => {
		dispatch(beginApiCall());
		return authorApi
			.getAuthors()
			.then(authors => {
				dispatch(loadAuthorSuccess(authors));
			})
			.catch(error => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
};
