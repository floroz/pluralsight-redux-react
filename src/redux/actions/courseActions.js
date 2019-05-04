import * as actionType from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const createCourse = course => {
	return { type: actionType.CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
	return {
		type: actionType.LOAD_COURSES_SUCCESS,
		courses
	};
};

export const updateCourseSuccess = course => {
	return {
		type: actionType.UPDATE_COURSE_SUCCESS,
		course
	};
};

export const createCourseSuccess = course => {
	return {
		type: actionType.CREATE_COURSE_SUCCESS,
		course
	};
};

export function deleteCourseOptimistic(course) {
	return { type: actionType.DELETE_COURSE_OPTIMISTIC, course };
}

export const loadCourses = () => {
	return dispatch => {
		dispatch(beginApiCall());
		return courseApi
			.getCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
};

export const saveCourse = course => {
	return dispatch => {
		dispatch(beginApiCall());
		return courseApi
			.saveCourse(course)
			.then(savedCourse => {
				course.id
					? dispatch(updateCourseSuccess(savedCourse))
					: dispatch(createCourseSuccess(savedCourse));
			})
			.catch(error => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
};

export const deleteCourse = course => {
	return dispatch => {
		// Doing optimistic delete, so not dispatching begin/end api call
		// actions, or apiCallError action since we're not showing the loading status for this.
		dispatch(deleteCourseOptimistic(course));
		return courseApi.deleteCourse(course.id);
	};
};
