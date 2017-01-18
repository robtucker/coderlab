import React, { PropTypes } from "react";

const Header = ({appTitle}) => (
    <section className="container white bg-primary padding-y-xl">
        <div className="row justify-center">
            <div className="text-center">
                <div className="img-logo"></div>
                <h1 className="white">{appTitle}</h1>
                <h3>where legends are born...</h3>
            </div>
        </div>
    </section>
)

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Header }
