import React, { Component, PropTypes } from "react";
import { Link, browserHistory } from "react-router";
import Paper from 'material-ui/Paper';
import { LoadingScreen } from '../../../components/loading-screen';
import {EditorContainer} from "../../../editor/editor.container";
import {Examiner} from "../../../editor/examiner";
import FlatButton from 'material-ui/FlatButton';
import { editorThemes, breakpoints } from "../../../styles";
import { ChallengeVideo } from "./challenge-video";
import {ChallengeInstructions} from "./challenge-instructions";
import {ChallengeNavigation} from "./challenge-navigation";
import { CourseConfigurationError } from "../../../core/exceptions";
import { AppTheme } from "../../../styles";
import { findIndex, find, flatten } from "lodash";
import { getCourseLevel } from "../data";

export class Challenge extends Component {

    constructor(props) {
        super(props);
    }

    propTypes: {
        contentHeight: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }

    componentWillMount() {
        // console.log('mounting challenge');
        // console.log(this.props);
        let {courseName, levelId, challengeId} = this.props.params

        this.getChallenge(courseName, parseInt(levelId), parseInt(challengeId));
        this.props.hideNavbar();
    }

    getChallenge(courseName, levelId, challengeId) {
        // console.log('getChallenge', courseName, levelId, challengeId) 

        let courseLevel = getCourseLevel(courseName, levelId);

        courseLevel.then((level) => {
            let challenge = find(level.challenges, c => c.id === challengeId);
            //console.log('courseLevel', level, challenge) 
            if(level && challenge) {
                this.props.startCourseLevel(courseName, levelId, level);
                this.props.startChallenge(challenge);
            } else {
                this.props.courseNotFound(courseName, LevelId);
            }
        });

        courseLevel.catch((err) => {
            //console.log('courseLevel error', err);
            this.props.courseNotFound(courseName, LevelId);
        })
    }
    
    nextChallenge() {

        let {courseName, levelId, challengeId} = this.props.params;
        let challengeCount = this.props.course.levels[parseInt(levelId - 1)].challenges.length;
        let levelComplete = parseInt(challengeId) >= challengeCount;

        // console.log('next challenge', challengeCount, levelComplete);

        let nextChallenge =  levelComplete ? 1 : parseInt(challengeId) + 1;
        let nextLevel = levelComplete ? parseInt(levelId) + 1 : parseInt(levelId);

        //console.log('next challenge', challengeCount, challengeComplete, nextLevel, nextChallenge);

        this.getChallenge(courseName, nextLevel, nextChallenge);
        browserHistory.push(`courses/${courseName}/level/${nextLevel}/${nextChallenge}`);
    }

    handleSubmit () {
        let examiner = new Examiner(this.props.challenge);

        // console.log('examiner', examiner);
        
        if(examiner.parserErrors.length) {
            this.props.showErrors(examiner.parserErrors);

        } else {
            examiner.examineAllTasks();

            // Time to line up the next task. Rather than simply incrementing the counter by one,
            // instead check outstanding errors and explicitly set the correct value on the state tree
            // Thus, if the user has gone ahead then they can skip over tasks they have already completed
            // and if the user has undone some of their work we can ensure they move back and redo the task
            let nextTask = examiner.getNextTask();

            // console.log('nextTask', nextTask, this.props.currentTask, this.props.challenge.tasks.length);

            // if the challenge is complete
            if(nextTask >= this.props.challenge.tasks.length) {
                // todo - save this to the db
                //this.props.saveProgress()
                return this.props.completeChallenge();
            }

            // don't show errors if they have just finished a task
            // i.e. only show them errors if they are on the same task or lower
            if(nextTask <= this.props.currentTask) {
                let showableErrors = flatten(examiner.taskErrors.slice(0, nextTask + 1))
                // console.log('showableErrors', examiner.taskErrors.slice(0, nextTask), showableErrors);
                this.props.showErrors(showableErrors);
            }

            // regardless of what happens always set the current task
            this.props.setCurrentTask(nextTask);
        }
    }

    getNavigationDrawer() {
        return (
            <ChallengeNavigation
                sidebarVisible={this.props.sidebarVisible} 
                toggleNavigationDrawer={this.props.toggleNavigationDrawer} 
                course={this.props.course}/>
        );
    }

    getVideo() {
        return (
            <ChallengeVideo     
                url={this.props.challenge.video} 
                show={this.props.showVideo} 
                close={this.props.toggleVideo}
                contentHeight={this.props.contentHeight}
                contentWidth={this.props.contentWidth}/>
        );
    }

    getInstructions() {
        return (
            <ChallengeInstructions
                currentTask={this.props.currentTask}
                challenge={this.props.challenge}
                task={this.props.task}
                toggleVideo={this.props.toggleVideo}
                errors={this.props.errors} 
                toggleNavigationDrawer={this.props.toggleNavigationDrawer}
                isMobile={this.props.isMobile}
                contentHeight={this.props.contentHeight}
                closeCompletionModal={this.props.closeCompletionModal}
                showCompletionModal={this.props.showCompletionModal}
                navbarVisible={this.props.navbarVisible} />
        );
    }

    getEditor() {
        return (
            <EditorContainer 
                handleSubmit={this.handleSubmit.bind(this)}
                nextChallenge={this.nextChallenge.bind(this)}
                contentHeight={this.props.contentHeight}
                isMobile={this.props.isMobile}
                challenge={this.props.challenge}
                visibleFile={this.props.visibleFile}
                editorTheme={this.props.editorTheme}
                display={this.props.display}
                errors={this.props.errors}
                challengeCompleted={this.props.challengeCompleted}
                resetErrors={this.props.resetErrors}/>
        );
    }

    render() {
        //console.log('render challenge', this.props.course, this.props.challenge);
        // we might be waiting for the api to return the course level
        if(!this.props.course || !this.props.challenge) return <LoadingScreen />;

        // show the video 
        if(this.props.showVideo) return this.getVideo();

        // show the challenge
        let containerStyles = {
            backgroundColor: editorThemes[this.props.editorTheme].cream,
        };
        
        return (
            <div>
                {this.getVideo()}
                {this.getNavigationDrawer()}
                <div className="col-xs row-lg justify-center-xs justify-start-lg align-center-xs align-start-lg height-100" 
                    style={containerStyles}>  
                    {this.getInstructions()}
                    {this.getEditor()}
                </div>
            </div>
        );
    }
}
