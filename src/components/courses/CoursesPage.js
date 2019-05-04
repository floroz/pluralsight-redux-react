import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
	render() {
		return (
			<>
				<h2>Course</h2>

				{this.props.courses.map(course => (
					<div key={course.title}>{course.title}</div>
				))}
			</>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		courses: state.courses
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoursesPage);
