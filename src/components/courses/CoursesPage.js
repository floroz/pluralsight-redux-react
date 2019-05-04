import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
	componentDidMount() {
		const { courses, authors, loadAuthors, loadCourses } = this.props;
		if (courses.length === 0) {
			try {
				loadCourses();
			} catch (error) {
				console.log('Loading courses failed: ' + error);
			}
		}

		if (authors.length === 0) {
			try {
				loadAuthors();
			} catch (error) {
				console.log('Authors courses failed: ' + error);
			}
		}
	}

	render() {
		return (
			<>
				<h2>Courses</h2>

				<CourseList courses={this.props.courses} />
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		courses:
			state.authors.length === 0
				? []
				: state.courses.map(course => {
						return {
							...course,
							authorName: state.authors.find(a => a.id === course.authorId).name
						};
				  }),
		authors: state.authors
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadCourses: () => dispatch(courseActions.loadCourses()),
		loadAuthors: () => dispatch(authorActions.loadAuthors())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoursesPage);
