import React, { PropTypes } from "react";

const Header = ({appTitle}) => (
    <section className="container white bg-primary padding-y-xl">
        <div className="row justify-center">
            <div className="text-xs-center">
                <div className="img-flask"></div>
                <h2 className="black">{appTitle}</h2>
                <h1>Where legends are born...</h1>
            </div>
        </div>
    </section>
)

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Header }
