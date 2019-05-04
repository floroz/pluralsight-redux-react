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

export const saveCourse = course => {
	return dispatch => {
		return courseApi
			.saveCourse(course)
			.then(savedCourse => {
				course.id
					? dispatch(updateCourseSuccess(savedCourse))
					: dispatch(createCourseSuccess(savedCourse));
			})
			.catch(error => {
				throw error;
			});
	};
};
