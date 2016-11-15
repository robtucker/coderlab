import React, { Component } from 'react';

import { Contact } from "./components/contact";

export class ContactContainer extends Component {

    componentWillMount() {
        console.log(this);
    }

    render() {
        return <Contact />
    }
        
}

