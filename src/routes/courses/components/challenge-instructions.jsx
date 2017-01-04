import React, { Component, PropTypes } from "react";
import Paper from 'material-ui/Paper';

export class ChallengeInstructions extends Component {

    getHint() {
        if(!this.props.hint) return null;

        return (
            <div className="margin-bottom-md">
                <Paper className="padding-y-sm padding-x-sm" >
                    <p className="marginless">HINT: {this.props.hint}</p>
                </Paper>
            </div>
        );
    }

    render() {
        return (
            <section>
                <div className="margin-bottom-md">
                    <h3>{this.props.challenge.title}</h3>
                    <p>{this.props.challenge.description}</p>
                </div>

                <div className="margin-bottom-md">
                    <p>YOUR TASK</p>
                    <Paper className="padding-y-xs padding-x-sm" >
                        {this.props.challenge.tasks.map(e => {
                            return <div key={e.id} className="icon-xs bg-primary"></div>
                        })}
                        <h5>{this.props.task.title}</h5>
                        <p>{this.props.task.description}</p>
                        <p>Stuck? <span className="primary1 cursor-pointer" 
                            onTouchTap={this.props.toggleVideo}> Watch the video</span> again</p>
                    </Paper>
                </div>
                {this.getHint()}
            </section>
        );
    }
}