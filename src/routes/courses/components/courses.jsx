import React, { Component, PropTypes } from 'react';

import { Logger } from "isolog";

class Courses extends Component {
    componentWillMount() {
        Logger.debug(this);
    }

    render() {
        return React.cloneElement(this.props.children, { courses: this.props.courses});
    }
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export { Courses }