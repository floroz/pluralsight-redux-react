import * as actionType from './actionTypes';
import * as authorApi from '../../api/authorApi';

export const loadAuthorSuccess = authors => {
	return {
		type: actionType.LOAD_AUTHORS_SUCCESS,
		authors
	};
};

export const loadAuthors = () => {
	return dispatch => {
		return authorApi
			.getAuthors()
			.then(authors => {
				dispatch(loadAuthorSuccess(authors));
			})
			.catch(error => {
				throw error;
			});
	};
};
