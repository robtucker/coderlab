import React, { PropTypes, Component } from 'react';

export class HtmlDisplay extends Component {

    getFiles() {
        var iframe = document.getElementById('foo'),
        iframedoc = iframe.contentDocument || iframe.contentWindow.document;

        iframedoc.body.innerHTML = 'Hello world';
    }
    
    render() {
        return (
            <section className="margin-x-xs margin-y-xs border-light width-100 height-100 flex-1 bg-white">
                {this.props.display}
            </section>
        )
    }
}