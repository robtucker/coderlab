import { connect } from "react-redux";

import CourseList from "./components/course-list";

const addCourseAction = (id, name) => ({
    type: "ADD_COURSE",
    id: id,
    name: name
});

var courseId = 2;

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (event) => {
            if(event.which === 13) {
                let name = event.target.value;
                let id = courseId++;
                console.log(`adding course ${name}`);
                dispatch(addCourseAction(id, name))
            }
        },
        onCourseClick: (id) => {
            console.log(`dispatching course click: ${id}`);
            //dispatch(toggleTodo(id))
        }
    }
}

const mapStateToProps = (state) => ({
    courses: state.courses
});

export const CoursesContainer = connect(mapStateToProps, mapDispatchToProps)(CourseList);
