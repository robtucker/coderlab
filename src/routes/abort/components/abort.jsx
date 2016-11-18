import React from 'react';
import { Link } from "react-router";
import { Logger } from "isolog";

let messages = {
    '404': "The page that you were looking for could not be found."
}

const Abort = (props) => {
    Logger.debug(props);
    return (
        <section className="container margin-y-xl">
            <h1>{props.params.id}</h1>
            <h5>{messages[props.params.id]}</h5>
            <p className="font-size-lg">Return to the <Link to="/">home page</Link></p>
        </section>
    );
};

export { Abort }