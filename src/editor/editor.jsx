import React, { Component } from 'react';
import { merge } from "lodash";
import { CodeEditor } from "./code-editor";
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { editorThemes } from "../styles"; 

let theme = editorThemes.dracula;

let containerStyles = {
    color: theme.lightGray,
    backgroundColor: theme.black
};

let tabStyles = {
    border: `1px solid ${theme.black}`,
    backgroundColor: theme.black
};

export class Editor extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('mounting editor container');
        console.log(this.props);
    }
    
    showHeader() {
        let res = [];

        for (var f in this.props.files) {
            let name = (" " + f).substr(1);
            let style = {
                display: 'inline-block',
                border: `1px solid ${theme.black}`
            };

            if(f === this.props.visibleFile) {
                style.backgroundColor = theme.lightBlack;
            } else {
                style.backgroundColor = theme.darkGray;
            }

            res.push(
                <div 
                    className="padding-x-sm padding-y-sm cursor-pointer"
                    style={style}
                    key={f} 
                    onTouchTap={() => {this.props.setVisibleFile(name)}}>{this.props.files[f].label}
                </div>
            );
        }
        
        return res;
    }

    showVisibleFile() {
        let res = this.fileComponents[this.props.visibleFile];
        console.log('showVisibleFile', res);
        return res;
    }
    
    render() {

        return (
            <section className="margin-x-xs margin-y-xs width-100 padding-x-sm">
                <form style={containerStyles}>

                    <Tabs
                        style={containerStyles}
                        value={this.props.visibleFile}
                        onChange={this.props.setVisibleFile}>
                        {Object.keys(this.props.files).map((name) => {
                            let file = this.props.files[name];
                            console.log('creating tab ' + name, file);

                            return (
                                <Tab 
                                    style={tabStyles}
                                    key={name} 
                                    label={file.label} 
                                    value={name}>

                                    <CodeEditor 
                                        file={file}
                                        onChange={(doc, change) => {
                                            this.props.onChange(name, doc.getValue(), change)
                                        }} /> 
                                </Tab>
                            );
                        })}
                    </Tabs>     
                    <div className="text-xs-right">
                        <RaisedButton 
                            label="Submit"
                            onTouchTap={() => this.props.onSubmit(this.props.challenge, this.props.files)} 
                            primary={true} />
                    </div>
                </form>
            </section>
        );
    }
};
