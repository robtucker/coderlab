import { connect } from "react-redux";

import { CourseIndex } from "../components/course-index";

const mapDispatchToProps = (dispatch) => ({

})

const mapStateToProps = (state) => ({
    courses: state.courses.byName
});

export const CourseIndexContainer = connect(mapStateToProps, mapDispatchToProps)(CourseIndex);
