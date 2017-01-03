import React, { Component } from 'react';
import { merge } from "lodash";
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { CodeEditor } from "./editors/code-editor";
import {HtmlDisplay} from "./display/html-display";
import { editorThemes } from "../styles"; 

let theme = editorThemes.dracula;

let containerStyles = {
    color: theme.lightGray,
    backgroundColor: theme.lightBlack
};

let tabStyles = {
    border: `1px solid ${theme.black}`,
    backgroundColor: theme.lightBlack,
};

export class Editor extends Component {

    // this is a magic number that prevents a bunch of ugly hacks in order to set the height of the editor
    // The simplest solution is to explicitly set the editor height minus the tabs and submit button
    getMarginOffset() {
        return 86;
    }

    componentWillMount() {
        //console.log('mounting editor container');
        //console.log(this.props);
    }
    

    stackVertical(editor, display) {

        let halfHeight = this.props.contentHeight / 2;

        let editorStyles = {
            width: this.props.isMobile ? '95%' : '60%',
            overflow: this.props.isMobile ? 'visible' : 'hidden',
            height: this.props.isMobile ? '100%' : this.props.contentHeight
        }

        return (            
            <section style={editorStyles}>
                {editor}
                <div style={{height: halfHeight}}>{display}</div>
            </section>
        );
    }

    getHtmlEditor() {
        return (            

            <form style={containerStyles}>

                <Tabs
                    style={containerStyles}
                    value={this.props.visibleFile}
                    onChange={this.props.setVisibleFile}>
                    {Object.keys(this.props.challenge.files).map((name) => {
                        let file = this.props.challenge.files[name];
                        //console.log('creating tab ' + name, file);

                        return (
                            <Tab 
                                style={tabStyles}
                                key={name} 
                                label={file.label} 
                                value={name}>

                                <CodeEditor 
                                    height={this.props.contentHeight / 2  - this.getMarginOffset()}
                                    file={file}
                                    onChange={(doc, change) => {
                                        //console.log('update file', doc, change);
                                        this.props.updateFile(name, doc);
                                        if(this.props.challenge.autosubmit) {
                                            this.props.updateDisplay(this.props.challenge);
                                            this.props.handleSubmit(this.props.challenge)
                                        }
                                    }} 
                                    updateDisplay={() => {
                                        this.props.updateDisplay(this.props.challenge);
                                    }}/> 
                            </Tab>
                        );
                    })}
                </Tabs>     
                <div className="text-xs-right">

                    <RaisedButton 
                        label="Submit"
                        onTouchTap={() => {
                            this.props.updateDisplay(this.props.challenge);
                            this.props.handleSubmit(this.props.challenge)
                        }} 
                        primary={true} />

                    <RaisedButton 
                        label="Run code"
                        onTouchTap={() => {
                            this.props.updateDisplay(this.props.challenge);
                        }} 
                        primary={false} />
                </div>
            </form>
        );
    }

    render() {
        if(this.props.challenge.type === 'web') {
            return this.stackVertical(this.getHtmlEditor(), <HtmlDisplay contents={this.props.display}/>);
        } else {
            throw new Error("A challenge must specify a valid type");
        }    
    }
};
