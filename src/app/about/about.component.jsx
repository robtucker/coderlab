import React, { Component } from 'react';
import { Link } from 'react-router';

export class About extends Component {

    componentWillMount() {
        console.log(this);
    }  

    render() {
        return (
            <section>
                <h1>about</h1>
                <Link to="/">Home</Link>
            </section>
        );
    }
}

