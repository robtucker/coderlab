import React, { PropTypes } from 'react';

import Course from "./course";

const CourseList = ({courses, addCourse, onCourseClick}) =>  (
    <section>
        <h1>course list</h1>

        <ul>
            {courses.map((c) => 
                <Course 
                    key={c.id} 
                    name={c.name} 
                    onClick={() => onCourseClick(c.id)} 
                />
            )}
        </ul>

        <input type="text" placeholder="Add a course" onKeyDown={addCourse}/>
    </section>
)

CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    addCourse: PropTypes.func.isRequired,
    onCourseClick: PropTypes.func.isRequired
};

export default CourseList;
