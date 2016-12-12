import React, { PropTypes } from "react";

import { SplitPanel } from "../../../components";

const Testimonials = () => (
    <section className="container">
        <SplitPanel img={require("../../../assets/img/testimonials/woman-transparent.png")} reverse={false}>
            <div className="col justify-center align-center-xs align-end-md margin-y-md">
                <blockquote className="blockquote max-width-400 marginless text-xs-center text-md-left">
                    <h5 className="margin-bottom-md">Having constant access to my own personal mentor 
                        made all the difference for me. If I can do it in my 40s then anyone can.</h5>
                    <footer className="blockquote-footer font-size-lg">Elaine, 42, London</footer>
                </blockquote>
            </div>
        </SplitPanel>

        <SplitPanel img={require("../../../assets/img/testimonials/woman-transparent2.png")} reverse={true}>
            <div className="col justify-center align-center-xs align-start-md margin-y-md">
                <blockquote className="blockquote max-width-400 marginless text-xs-center text-md-left">
                    <h5 className="margin-bottom-md">Having constant access to my own personal mentor 
                        made all the difference for me. If I can do it in my 40s then anyone can.</h5>
                    <footer className="blockquote-footer font-size-lg">Elaine, 42, London</footer>
                </blockquote>
            </div>
        </SplitPanel>
    </section>
)

export { Testimonials };