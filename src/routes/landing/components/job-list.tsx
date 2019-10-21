import React, { PropTypes } from "react";

import { Icon } from "../../../components/icon";

const JobList = ({data}) => {
    
    return (
        <div className="row justify-center">
            {
                data.map((job) => {
                    return <Icon key={job.id} imgClass={job.imgClass} label={job.label} />
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