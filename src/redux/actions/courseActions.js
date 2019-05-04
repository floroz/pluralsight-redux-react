import * as actionType from './actionTypes';

export function createCourse(course) {
	return { type: actionType.CREATE_COURSE, course };
}
