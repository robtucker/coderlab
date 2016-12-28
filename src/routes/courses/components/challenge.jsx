import React, { Component } from "react";
import { Link } from "react-router";
import FlatButton from 'material-ui/FlatButton';
import { find } from "lodash";
import { Editor } from "../../../editor";
import { palette } from "../../../styles";
import { ChallengeVideo } from "./level-video";
import { HtmlDisplay } from "../displays";
import Paper from 'material-ui/Paper';
import { CourseConfigurationError } from "../../../core";

export class Challenge extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('mounting challenge');
        console.log(this.props);
        this.init();
    }

    init() {
        let {courseName, levelId, challengeId} = this.props.params

        this.props.getCourseLevel(courseName, parseInt(levelId), parseInt(challengeId));
    }

    render() {
        if(!this.props.challenge || !this.props.task) {
            //console.log('returning null');
            return null;
        }

        let height = window.innerHeight * 0.83;
        let containerStyles = {backgroundColor: palette.accent2Color};
        //console.log('render challenge');
        //console.log(this.props);
        
        return (
            <div>

                {
                // <ChallengeVideo     
                //     url={this.props.challenge.video} 
                //     show={this.props.showVideo} 
                //     close={this.props.toggleVideo}/>
                }

                <div className="padding-y-lg padding-x-md height-100"  style={containerStyles}>
                
                    <div className="col-xs row-lg justify-center align-center-xs align-start-lg">
                        <section className="margin-x-xs margin-y-xs width-80 flex-1">

                            <h3>{this.props.challenge.title}</h3>
                            <p>{this.props.challenge.description}</p>
                            
                            <h4>TASKS</h4>

                            <Paper className="padding-y-md padding-x-sm" >
                                {this.props.challenge.tasks.map(e => {
                                    return <div key={e.id} className="icon-xs bg-primary"></div>
                                })}
                                <h5>{this.props.task.title}</h5>
                                <p>{this.props.task.description}</p>
                                <p>Stuck? <span className="primary1 cursor-pointer" 
                                    onTouchTap={this.props.toggleVideo}> Watch the video</span> again</p>
                            </Paper>
                        </section>

                        <Editor
                            files={this.props.challenge.files} 
                            setVisibleFile={this.props.setVisibleFile}
                            visibleFile={this.props.visibleFile}
                            onChange={this.props.updateFile} 
                            onSubmit={this.props.submitChallenge}/>

                        <HtmlDisplay display={this.props.display}/>
                    </div>
                </div>
            </div>
        )
    }
}
