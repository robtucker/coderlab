import React, { Component } from 'react';
import { Link } from 'react-router';

import { AppStore } from "../app.store";

export class Home extends Component {

    componentWillMount() {
        console.log(this);
    }  

    handleClick() {
        console.log('handling click event');
        AppStore.dispatch({type: "INCREMENT_COUNTER"});
    }

    render() {
        return (
            <section>
                <h1>Home</h1>
            </section>
        );
    }
}

