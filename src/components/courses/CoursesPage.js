import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

class CoursesPage extends React.Component {
	state = {
		redirectToAddCoursePage: false
	};

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

	handleDeleteCourse = course => {
		toast.success('Course deleted.');
		this.props.deleteCourse(course);
	};

	render() {
		return (
			<>
				{this.state.redirectToAddCoursePage && <Redirect to='/course' />}

				<h2>Courses</h2>

				{this.props.loading ? (
					<Spinner />
				) : (
					<>
						<button
							style={{ marginBottom: 20 }}
							className='btn btn-primary add-course'
							onClick={() => this.setState({ redirectToAddCoursePage: true })}>
							Add Course
						</button>
						<CourseList
							courses={this.props.courses}
							onDeleteClick={this.handleDeleteCourse}
						/>
					</>
				)}
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadAuthors: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	deleteCourse: PropTypes.func.isRequired
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
		authors: state.authors,
		loading: state.asyncCalls !== 0
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadCourses: () => dispatch(courseActions.loadCourses()),
		loadAuthors: () => dispatch(authorActions.loadAuthors()),
		deleteCourse: course => dispatch(courseActions.deleteCourse(course))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CoursesPage);
