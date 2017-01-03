import React, { Component, PropTypes } from "react";

export class ChallengeInstructions extends Component {

    render() {
        let instructionStyles = {
            //width: this.props.isMobile ? '100%' : '40%',
            overflowY: this.props.isMobile ? 'visible' : 'scroll',
            //height: this.props.isMobile ? '100%' : this.props.height

        }

        return (
            <section className="" style={instructionStyles}>
                <div className="padding-x-md" style={menuButtonStyles}>
                    <div className="row align-center margin-bottom-md">
                        <i className="material-icons margin-right-xs" onTouchTap={this.props.toggleSidebar}>menu</i>
                    </div>

                    <div className="margin-bottom-md">
                        <h3>{this.props.challenge.title}</h3>
                        <p>{this.props.challenge.description}</p>
                    </div>

                    <div className="">
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
}