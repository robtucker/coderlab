import React, { PropTypes } from 'react'

const Course = ({ name, onClick }) => (
    <li onClick={onClick}>
        {name}
    </li>
);

Course.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


export default Course;