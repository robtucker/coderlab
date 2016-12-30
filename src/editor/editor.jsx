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
    backgroundColor: theme.lightBlack,
};

export class Editor extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('mounting editor container');
        console.log(this.props);
    }
    
    render() {
        return (
            <form style={containerStyles}>

                <Tabs
                    style={containerStyles}
                    value={this.props.visibleFile}
                    onChange={this.props.setVisibleFile}>
                    {Object.keys(this.props.files).map((name) => {
                        let file = this.props.files[name];
                        //console.log('creating tab ' + name, file);

                        return (
                            <Tab 
                                style={tabStyles}
                                key={name} 
                                label={file.label} 
                                value={name}>

                                <CodeEditor 
                                    height={this.props.height - 86}
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
        );
    }
};
