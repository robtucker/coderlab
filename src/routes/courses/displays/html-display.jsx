import React, { PropTypes, Component } from 'react';
import { findDOMNode } from "react-dom";

export class HtmlDisplay extends Component {

    componentDidMount() {
        // console.log('html display window mounted');
        // console.log(this.props);
        let iframedoc = this.iframe.contentDocument || this.iframe.contentWindow.document;

        //console.log(this.iframedoc)
    }
    updateBody() {
        let iframedoc = this.iframe.contentDocument || this.iframe.contentWindow.document;

        iframedoc.body.innerHTML = 'Hello world';
    }

    render() {
        return (
            <iframe 
                width="100%"
                height={this.props.height}
                frameBorder="0"
                ref={(i) => { this.iframe = i; }}  
                srcDoc={this.props.contents} />
        )
    }
}