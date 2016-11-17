import { connect } from "react-redux";

import { Courses } from "./components/courses";

const mapDispatchToProps = (dispatch) => ({
})

const mapStateToProps = (state) => ({
    courses: state.courses,
});

export const CoursesContainer = connect(mapStateToProps, mapDispatchToProps)(Courses);
