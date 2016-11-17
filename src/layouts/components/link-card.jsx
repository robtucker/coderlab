import React, { PropTypes } from "react";

import { Link } from "react-router";

import Paper from 'material-ui/Paper';

import { typography, palette} from "../../styles";

const LinkCard = ({title, description, iconClass, url}) => (
    <Link to={url} className="flex-1 margin-x-sm margin-y-sm">
        <Paper className="col-xs row-md justify-center align-center padding-y-sm height-100 " 
            style={{maxWidth: "600px"}}>
            <div className={`${iconClass} margin-bottom-sm margin-x-md border-radius-100`}></div>

            <div className="max-width-500 text-xs-center text-md-left margin-x-sm">
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
    url: PropTypes.string.isRequired,
}

export { LinkCard }