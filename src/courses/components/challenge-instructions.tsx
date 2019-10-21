import React, { Component, PropTypes } from "react";
import Paper from 'material-ui/Paper';
import {palette} from "../../styles";
import { ErrorIcon, SuccessIcon, CloseIcon } from '../../../components/action-icons';
import {utils} from "../../common/core/utils";
import {find, groupBy} from "lodash";

let unfulfilledIconStyle = {
    backgroundColor: palette.accent2Color,
    color: palette.accent3Color,
    borderRadius: '100%',
    padding: '5px',
    margin: '3px',
    fontSize: '14px',
    height: '16px',
    width: '16px',
    display: 'inline-block',
    textAlign: 'center'
}

let fulfilledIconStyle = {
    backgroundColor: palette.success,
    color: 'white',
    borderRadius: '100%',
    padding: '5px',
    margin: '3px',
    fontSize: '14px',
    height: '16px',
    width: '16px',
}

export class ChallengeInstructions extends Component {

    componentWillMount() {
        // console.log('mounting instructions');
        // console.log(this.props);
    }

    getErrors() {
        if(!this.props.errors.length) return null;

        return (
            <div className="margin-bottom-md">
                <Paper className="padding-y-md padding-x-sm" >
                    <div className="row align-center margin-bottom-sm red">
                        <ErrorIcon />
                        <span>Incorrect Submission</span>
                    </div>
                    {this.props.errors.map((error) => {
                        // todo - if there's no error message should trigger an api error post
                        let errorText = typeof error.hint === 'string' ? error.hint : 
                            (typeof error.error === 'string' ? error.error : config.CHALLENGE_ERROR);
                        return <p key={error.id} className="marginless">{errorText}</p>
                    })}
                </Paper>
            </div>
        );
    }
    
    getCompletionModal() {
        if(!this.props.showCompletionModal) return null;

        return (
            <div className="absolute height-100 width-100 overlay-40">
                <div className="col justify-center align-center height-100 width-100">
                    <Paper className="padding-y-sm relative">
                        <div className="absolute margin-y-xs" style={{top: '0px', right: '0px'}}
                            onTouchTap={this.props.closeCompletionModal}>
                            <CloseIcon />
                        </div>
                        <div className="padding-x-lg text-center margin-bottom-xs">
                            <SuccessIcon fontSize="64px" padding="6px" borderWidth="3px"/>
                            <h2 className="margin-y-sm">Challenge complete!</h2>
                            <p className="marginless">+250 points</p>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }

    getNavbarToggleButton() {
        return <i onTouchTap={this.props.toggleNavbar} 
            style={{borderRadius: '3px', padding: '3px'}}
            className="material-icons">{this.props.navbarVisible ? 'arrow_upward' : 'arrow_downward'}</i> 
    }


    getTaskIcons() {
        let res = [];
        let curr = parseInt(this.props.currentTask);
        for(var i = 0; i < this.props.challenge.tasks.length; i++) {
            if(i >= curr) {
                res.push(
                    <div className="row justify-center align-center" style={unfulfilledIconStyle} key={utils.s4()}>
                        <span>{i + 1}</span>
                    </div>
                );
            } else {
                res.push(
                    <i className="material-icons" style={fulfilledIconStyle} key={utils.s4()}>done</i>
                );           
            }
        }
        return res;
    }

    /**
     * Dynamically evaluate the file and line number
     * where each rule is taking place
     */
    getRuleLocations() {
        // get the location of each of the rules
        let locations = this.props.task.rules.map((r) => {
            // find the location based on the text node
            if(r.args.textNode) {
                let file = find(this.props.challenge.files, f => f.id === r.fileId);
                let lineNumber = utils.getLineNumber(file.contents, r.args.textNode.val);

                if(lineNumber === -1) {
                    // console.log('getRuleLocations', lineNumber, r.args.textNode, file.contents)
                    throw new Error("The rule location does not have a valid line number")
                }

                return {
                    ruleId: r.id,
                    fileLabel: file.label,
                    textNode: r.args.textNode, 
                    lineNumber 
                }
            }
        })
        return locations;
    }

    parseTaskDescription() {
        let replacements = {
            // e.g. line 1 of index.html
            location: () => {
                let locs = this.getRuleLocations();
                if(locs.length > 1) {
                    throw new Error("You cannot specify a location when you have multiple locations in your task rules");
                }
                // only bother with the file if there are multiple files
                return `line ${locs[0].lineNumber}${this.props.challenge.files.length > 1 ? ' of' + locs[0].fileLabel : ''}`;
            }
        }

        return this.props.task.description.replace(/<%.+%>/, (match) => {
            //console.log('parseTaskDescription', match, match.replace(/%|<|>/g, ''));
            return replacements[match.replace(/%|<|>/g, '')]() || '';

        })
    }

    getTasks() {
        let tasksLength = this.props.challenge.tasks.length;
        let currentTask = parseInt(this.props.currentTask) + 1;

        if(!tasksLength) return null;


        return (
            <div className="margin-bottom-md">
                <Paper className="padding-y-md padding-x-sm" >
                    <div className="row justify-start align-center margin-bottom-sm">
                        <div style={{color: palette.accent3Color}}>TASK {currentTask}/{tasksLength}</div>
                        <div style={{marginLeft: 'auto'}}>
                            <div className="row align-center">
                                {this.getTaskIcons()}
                            </div>
                        </div>
                    </div>
                    <p>{this.parseTaskDescription()}</p>
                    <p className="marginless" style={{color: palette.accent3Color}}>Stuck? 
                        <span className="primary1 cursor-pointer" onTouchTap={this.props.toggleVideo}> 
                        &nbsp;Watch the video</span> again
                    </p>
                </Paper>
            </div>            
        );
    }

    render() {
            
        let height = this.props.isMobile ? '100%' : this.props.contentHeight;

        let instructionStyles = {
            width: this.props.isMobile ? '100%' : '40%',
            height
        }

        return (
            <section className="relative" style={instructionStyles}>
                {this.getCompletionModal()}
                <div className="" style={{height: height, overflowY: this.props.isMobile ? 'visible' : 'scroll'}}>
                    <div className="padding-x-md padding-y-sm">
                        <div className="row align-center">
                            <i className="material-icons margin-right-xs" onTouchTap={this.props.toggleNavigationDrawer}>menu</i>
                            {this.getNavbarToggleButton()}
                        </div>
                        <section>
                            <div className="margin-bottom-md">
                                <h3 className="margin-y-sm">{this.props.challenge.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: this.props.challenge.description}} />
                            </div>
                            {this.getTasks()}
                            {this.getErrors()}
                        </section>
                    </div>
                </div>
            </section>

        );
    }
}
