import React, { PropTypes, Component } from 'react';
import { findDOMNode } from "react-dom";
import CodeMirror from "codemirror";
import * as xml from "codemirror/mode/htmlmixed/htmlmixed";
import * as js from "codemirror/mode/javascript/javascript";

export class CodeEditor extends Component {

    componentWillMount() {
        console.log('mounting code editor');
        console.log(this.props)
    }


    componentDidMount () {

        let options = {
            lineNumbers: true,
            mode: this.props.file.mode,
            theme: 'dracula'
        };

        console.log('options', options);

        const textareaNode = findDOMNode(this.refs.textarea);
        this.instance = CodeMirror.fromTextArea(textareaNode, options);
        this.instance.on('change', this.props.onChange);

        console.log('code mirror instance');
        console.log(this.instance);
        // this.codeMirror.on('focus', this.focusChanged.bind(this, true));
        // this.codeMirror.on('blur', this.focusChanged.bind(this, false));
        // this.codeMirror.on('scroll', this.scrollChanged);

        this.instance.setValue(this.props.file.contents);
    }

    render () {
        // const editorClassName = className(
        //     'ReactCodeMirror',
        //     this.state.isFocused ? 'ReactCodeMirror--focused' : null,
        //     this.props.className
        // );
        let editorClassName = "bg-black";

        return (
            <div>
                <textarea ref="textarea" />
            </div>
        );
    }
}
