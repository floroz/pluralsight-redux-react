import React from 'react';
import CourseFrom from './CourseForm';
import { shallow } from 'enzyme';

function renderCourseForm(args) {
	const defaultProps = {
		authors: [],
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};
	const props = { ...defaultProps, ...args };

	return shallow(<CourseFrom {...props} />);
}

it('renders form and header', () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find('form').length).toBe(1);
	expect(wrapper.find('h2').text()).toEqual('Add Course');
});

it('labels save buttons as "Save" when not saving', () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find('button').text()).toBe('Save');
});
