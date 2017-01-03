import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import { List } from 'material-ui/List';
import { HtmlDisplay, MenuLink, LoadingScreen } from '../../../components';
import {EditorContainer} from "../../../editor";
import Divider from 'material-ui/Divider';
import Drawer from "material-ui/Drawer";
import FlatButton from 'material-ui/FlatButton';
import { editorThemes, breakpoints } from "../../../styles";
import { ChallengeVideo } from "./level-video";
import {ChallengeInstructions} from "./challenge-instructions";
import Paper from 'material-ui/Paper';
import { CourseConfigurationError } from "../../../core";
import { AppTheme } from "../../../styles";

let drawerHeaderStyles = {
    paddingLeft: "16px",
    textDecoration: "none"
};

export class Challenge extends Component {

    constructor(props) {
        super(props);
    }

    propTypes: {
        contentHeight: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }

    componentWillMount() {
        console.log('mounting challenge');
        console.log(this.props);
        
        let {courseName, levelId, challengeId} = this.props.params

        this.props.getCourseLevel(courseName, parseInt(levelId), parseInt(challengeId));
        this.props.hideNavbar();
    }


    getSidebar() {
        return (
            <Drawer open={this.props.sidebarVisible} 
                onRequestChange={this.props.toggleSidebar} 
                docked={false}
                className="width-100"> 
                <Link className="primary2" to="/" onClick={this.props.toggleSidebar}>
                    <div className="width-100 padding-y-sm font-size-lg" style={drawerHeaderStyles}>
                        {this.props.params.courseName}
                    </div>
                </Link>
                <Divider />
                <List>
                    {
                        // this.props.course.levels.map((item) => {
                        //     return <MenuLink 
                        //         key={item.id} 
                        //         onTouchTap={props.toggleSidebar} 
                        //         label={item.title} />
                        // })
                    }     
                </List>
            </Drawer>
        );
    }

    getVideo() {
        return (
            <ChallengeVideo     
                url={this.props.challenge.video} 
                show={this.props.showVideo} 
                close={this.props.toggleVideo}/>
        );
    }

    getInstructions() {
        let instructionStyles = {
            width: this.props.isMobile ? '100%' : '40%',
            overflowY: this.props.isMobile ? 'visible' : 'scroll',
            height: this.props.isMobile ? '100%' : this.props.contentHeight
        }

        let menuButtonStyles = this.props.navbarVisible ? {marginTop: '8px'} : {marginTop: '2px'};

        return (
            <section className="" style={instructionStyles}>
                <div className="padding-x-md" style={menuButtonStyles}>
                    <div className="row align-center margin-bottom-md">
                        <i className="material-icons margin-right-xs" onTouchTap={this.props.toggleSidebar}>menu</i>
                        {
                            this.props.navbarVisible ? <i onTouchTap={this.props.toggleNavbar} 
                                style={{borderRadius: '3px', padding: '3px'}}
                                className="material-icons">arrow_upward</i> : null
                        }
                    </div>

                    <div className="margin-bottom-md">
                        <h3>{this.props.challenge.title}</h3>
                        <p>{this.props.challenge.description}</p>
                    </div>

                    <div className="margin-bottom-md">
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
                </div>
            </section>
        );
    }

    render() {
        console.log('render chall', this.props)
        // we might be waiting for the api to return the course level
        if(!this.props.challenge || !this.props.task) return <LoadingScreen />;


        let containerStyles = {
            backgroundColor: editorThemes[this.props.editorTheme].cream,
        };
        
        return (
            <div>
                {this.getSidebar()}
                <div className="col-xs row-lg justify-center-xs justify-start-lg align-center-xs align-start-lg height-100" 
                    style={containerStyles}>  
                    {this.getInstructions()}
                    <EditorContainer />
                </div>
            </div>
        )
    }
}
