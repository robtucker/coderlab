import React, { Component } from 'react';

import { Mentors } from "./components/mentors";

export class MentorsContainer extends Component {

    componentWillMount() {
        console.log(this);
    }

    render() {
        return <Mentors />
    }
        
}

