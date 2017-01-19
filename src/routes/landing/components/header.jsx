import React, { PropTypes } from "react";

const Header = ({appTitle}) => (
    <section className="container  bg-primary padding-y-xl">
        <div className="row justify-center">
            <div className="text-center">
                <div className="img-logo"></div>
                <h3 >{appTitle}</h3>
                <h1 className="white">where legends are born...</h1>
            </div>
        </div>
    </section>
)

Header.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Header }
