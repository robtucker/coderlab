import React, { PropTypes, Component } from 'react';
import { findDOMNode } from "react-dom";
import CodeMirror from "codemirror";
import RunMode from "codemirror/addon/runmode/runmode";
import * as xml from "codemirror/mode/htmlmixed/htmlmixed";
import * as js from "codemirror/mode/javascript/javascript";

export class CodeEditor extends Component {

    minLineCount = 10;

    componentWillMount() {
        // console.log('mounting code editor');
        // console.log(this.props)
    }

    componentDidMount () {

        let options = {
            lineNumbers: true,
            //htmlMode: true,
            //matchClosing: true, 
            //indentWithTabs: false,
            lineWrapping: true,
            //viewportMargin: 50,
            mode: this.props.file.mode,
            theme: 'dracula'
        };

        //console.log('options', options);

        const textareaNode = findDOMNode(this.refs.textarea);
        this.instance = CodeMirror.fromTextArea(textareaNode, options);
        //console.log('code mirror instance', this.instance);

        this.instance.on('change', this.props.onChange);

        let contents = this.props.file.contents || "";
        let lineCount = contents.split(/\r\n|\r|\n/).length;
        //console.log(`File ${this.props.file.mode} has line count of ${lineCount}`);
        
        if(lineCount < this.minLineCount) {
            for(var i = lineCount; i < this.minLineCount; i++) {
                contents += '\n';
            }
        }
        //todo - because the value is updated automatically if you edit undo enough times
        // it will delete the original text. instead this should be initialized in the options
        this.instance.setValue(contents);
    }

    render () {
        if(this.instance) {
            //console.log('setting size', this.props.height);
            this.instance.setSize('auto', this.props.height);
        }
        return (
            <div id="code-editor-container">
                <textarea ref="textarea" />
            </div>
        );
    }
}
