import React, { Component } from 'react';
import { merge } from "lodash";
import { CodeEditor } from "./code-editor";
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { editorThemes } from "../../styles"; 

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

    // this is a magic number that represents the height of the editor's margins, 
    // i.e. the submit button and the selectable tabs
    // this number saves a bunch of other ugly hacks that would be required to put the 
    // editor inside a scrollable container. The simplest solution is to explicitly 
    // set the height of the editor and then minus the height of the margins 
    editorMargin = 86;

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //console.log('mounting editor container');
        //console.log(this.props);
    }
    
    render() {
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
                                    height={this.props.height - this.editorMargin}
                                    file={file}
                                    onChange={(doc, change) => {
                                        //console.log('update file', doc, change);
                                        this.props.onChange(name, doc)
                                    }} /> 
                            </Tab>
                        );
                    })}
                </Tabs>     
                <div className="text-xs-right">
                    <RaisedButton 
                        label="Submit"
                        onTouchTap={() => this.props.onSubmit(this.props.challenge)} 
                        primary={true} />
                </div>
            </form>
        );
    }
};
