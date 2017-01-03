import React, { PropTypes, Component } from 'react';
import { findDOMNode } from "react-dom";

export class HtmlDisplay extends Component {

    componentDidMount() {
        console.log('html display window mounted');
        console.log(this.props);
    }

    render() {
        return (
            <iframe 
                width="100%"
                height="100%"
                frameBorder="0"
                ref={(i) => { this.iframe = i; }}  
                srcDoc={this.props.contents} />
        )
    }
}