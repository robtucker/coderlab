import React, { PropTypes } from "react";

import { Quote } from "../../../components/quote";
import { JobListContainer } from "../containers/job-list";

const CodingCareers = () => (
    <section className="text-center margin-y-xl">
        <div className="padding-x-md">
            <h2 className="margin-bottom-lg">Everyone needs coding skills...</h2>
            <JobListContainer />
        </div>

        <Quote text={props.quote.text} author={props.quote.author} />
    </section>
)

export { CodingCareers };