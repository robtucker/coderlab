import React, { Component } from 'react';
import { merge } from "lodash";
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { CodeEditor } from "./editors/code-editor";
import {HtmlDisplay} from "./display/html-display";
import { editorThemes, palette } from "../styles"; 
import {ErrorIcon, SuccessIcon} from "../components/action-icons";

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
        // console.log('mounting editor container');
        // console.log(this.props);
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
    
    getActionBar() {
        // let actionBarStyles = {
        //     backgroundColor: this.props.challengeCompleted ? palette.success : 'inherit'
        // };

        // console.log('getActionBar', actionBarStyles, this.props)
        return(
            <div className="row align-center text-xs-right">
            
                {this.props.errors.length ? <ErrorIcon /> : null}
                {this.props.errors.length ? <span>Incorrect Submission</span> : null}
                {this.props.challengeCompleted ? <SuccessIcon /> : null}
                {this.props.challengeCompleted ? <span style={{color: palette.success}}>Challenge complete</span> : null}

                <RaisedButton 
                    label="Reset code"
                    style={{marginLeft: 'auto'}}
                    onTouchTap={() => {
                        this.props.resetErrors();
                        this.props.updateDisplay(this.props.challenge);
                    }} 
                    primary={false} />

                <RaisedButton 
                    label="Run code"
                    onTouchTap={() => {
                        this.props.updateDisplay(this.props.challenge);
                    }} 
                    primary={false} />

                <RaisedButton 
                    label={this.props.challengeCompleted ? 'Continue' : "Submit"}
                    onTouchTap={() => {
                        if(!this.props.challengeCompleted) {
                            this.props.resetErrors()
                            this.props.updateDisplay(this.props.challenge);
                            this.props.handleSubmit()
                        } else {
                            this.props.nextChallenge()
                        }
                    }} 
                    backgroundColor={this.props.challengeCompleted ? palette.success : palette.primary1Color} />
            </div>
        );
    }

    getHtmlEditor() {
        return (
            <form style={containerStyles}>
                <Tabs
                    style={containerStyles}
                    value={this.props.visibleFile}
                    onChange={this.props.setVisibleFile}>
                    {this.props.challenge.files.map((file) => {

                        // console.log('creating tab ' + file.id, file);
                        return (
                            <Tab 
                                style={tabStyles}
                                key={file.id} 
                                label={file.label} 
                                value={file.id}>

                                <CodeEditor 
                                    key={file.id}
                                    height={this.props.contentHeight / 2  - this.getMarginOffset()}
                                    file={file}
                                    onChange={(doc, change) => {
                                        //console.log('update file', doc, change);
                                        this.props.updateFile(file.id, doc);
                                        if(this.props.challenge.autosubmit) {
                                            this.props.updateDisplay(this.props.challenge);
                                            this.props.handleSubmit()
                                        }
                                    }} 
                                    updateDisplay={() => {
                                        this.props.updateDisplay(this.props.challenge);
                                    }}/> 
                            </Tab>
                        );
                    })}
                </Tabs>     
                {this.getActionBar()}
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
