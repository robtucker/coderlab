import React, { Component } from 'react';

import { About } from "./components/about";

export class AboutContainer extends Component {

    componentWillMount() {
        console.log(this);
    }

    render() {
        return <About />
    }
        
}

