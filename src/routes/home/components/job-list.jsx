import React, { PropTypes } from "react";

import { JobIcon } from "./job-icon";

const JobList = ({data}) => {
    
    return (
        <div className="row justify-center padding-y-sm">
            {
                data.map((job) => {
                    return <JobIcon key={job.id} imgClass={job.imgClass} label={job.label} />
                })
            }
        </div>
    );
}

JobList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        imgClass: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export { JobList };