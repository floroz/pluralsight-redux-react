import * as actionType from './actionTypes';
import * as courseApi from '../../api/courseApi';

export const createCourse = course => {
	return { type: actionType.CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
	return {
		type: actionType.LOAD_COURSES_SUCCESS,
		courses
	};
};

export const loadCourses = () => {
	return dispatch => {
		return courseApi
			.getCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				throw error;
			});
	};
};
