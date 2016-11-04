import React, { Component } from 'react';

export class AboutContainer extends Component {

    componentWillMount() {
        console.log(this);
    }

    render() {
        return <section>{this.props.children}</section>
    }
        
}

