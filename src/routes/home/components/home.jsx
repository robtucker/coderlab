import React,  { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Header } from "./header";
import { Testimonial } from "./testimonial";
import { JobListContainer } from "../containers/job-list";
import { Panel, Quote, ArrowBox } from "../../../layouts";

const Home = (props) => {
     
    return (
        <div>
            <Header appTitle={props.appTitle}/>

            <Testimonial data={props.testimonial}/>

            <Panel imgClass="img-bubbles">
                <div>
                    <div className="text-xs-center">
                        <h1>Anyone can learn to code</h1>
                        <h3 className="padding-y-md">Write your first line of code right now!</h3>
                        <ArrowBox text="Let's code!" />
                    </div>
                </div>
            </Panel>

            <section className="container text-xs-center padding-y-md">
                <h2 className="primary2 padding-y-md">Everyone needs coding skills...</h2>

                <JobListContainer />

            </section>

            <Quote text={props.quote.text} author={props.quote.author} />

        </div>
    );
}

Home.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Home }