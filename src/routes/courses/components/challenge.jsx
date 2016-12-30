import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import FlatButton from 'material-ui/FlatButton';
import { find } from "lodash";
import { Editor } from "../../../editor";
import { editorThemes, palette, breakpoints } from "../../../styles";
import { ChallengeVideo } from "./level-video";
import { HtmlDisplay } from "../displays";
import Paper from 'material-ui/Paper';
import { CourseConfigurationError } from "../../../core";
import { AppTheme } from "../../../styles";


export class Challenge extends Component {

    constructor(props) {
        super(props);
    }

    propTypes: {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }

    componentWillMount() {
        //console.log('mounting challenge');
        //console.log(this.props);
        this.init();
    }

    init() {
        let {courseName, levelId, challengeId} = this.props.params

        this.props.getCourseLevel(courseName, parseInt(levelId), parseInt(challengeId));
    }


    render() {

        let containerHeight = this.props.appHeight - AppTheme.appBar.height;
        if(containerHeight < editorThemes.common.minHeight) containerHeight = editorThemes.common.minHeight;
        //console.log('containerHeight', containerHeight)

        if(!this.props.challenge || !this.props.task) {
            //console.log('returning null');
            return null;
        }

        let containerStyles = {
            backgroundColor: editorThemes[this.props.editorTheme].cream,
        };

        let leftPanelStyle = {
            width: '40%',
            height: containerHeight,
            overflow: 'scroll'
        }
        let rightPanelStyle = {
            width: '60%',
            height: containerHeight,
            overflow: 'hidden'
        }

        let panelHeight = containerHeight / 2;

        return (
            <div id="challenge-container" style={containerStyles}>

                {
                // <ChallengeVideo     
                //     url={this.props.challenge.video} 
                //     show={this.props.showVideo} 
                //     close={this.props.toggleVideo}/>
                }

                <div className="col-xs row-lg justify-center-xs justify-start-lg align-center-xs align-start-lg" style={{height: containerHeight}}>
                
                    <section className="padding-x-md" style={leftPanelStyle}>
                        
                        <div className="margin-y-md">
                            <h3>{this.props.challenge.title}</h3>
                            <p>{this.props.challenge.description}</p>
                        </div>

                        <div className="margin-y-md">
                            <p>YOUR TASK</p>
                            <Paper className="padding-y-md padding-x-sm" >
                                {this.props.challenge.tasks.map(e => {
                                    return <div key={e.id} className="icon-xs bg-primary"></div>
                                })}
                                <h5>{this.props.task.title}</h5>
                                <p>{this.props.task.description}</p>
                                <p>Stuck? <span className="primary1 cursor-pointer" 
                                    onTouchTap={this.props.toggleVideo}> Watch the video</span> again</p>
                            </Paper>
                        </div>
                    </section>
                    <section style={rightPanelStyle}>
                        <Editor
                            height={panelHeight}
                            files={this.props.challenge.files} 
                            setVisibleFile={this.props.setVisibleFile}
                            visibleFile={this.props.visibleFile}
                            onChange={this.props.updateFile} 
                            onSubmit={this.props.submitChallenge}/>
                    
                        <HtmlDisplay 
                            height={panelHeight}
                            contents={this.props.display}/>
                    </section>
                </div>
            </div>
        )
    }
}
