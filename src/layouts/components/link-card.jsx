import React, { PropTypes } from "react";

import { Link } from "react-router";

import Paper from 'material-ui/Paper';

import { typography, palette} from "../../styles";

const LinkCard = ({title, description, iconClass, url}) => (
    <Link to={url} className="width-100 height-100 margin-x-sm margin-bottom-md">
        <Paper className="col-xs row-md justify-start align-center padding-y-sm height-100 ">
            <div className={`${iconClass} margin-bottom-sm margin-x-md border-radius-100`}></div>

            <div className="text-xs-center text-md-left margin-x-sm">
                <h4 className="primary1 link-hover">{title}</h4>
                <p style={{color: typography.textLightBlack}}>{description}</p>
            </div>
        </Paper>
    </Link>
);

LinkCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export { LinkCard }