import React, { PropTypes } from "react";

import { Link } from "react-router";

import Paper from 'material-ui/Paper';

import { typography, palette} from "../../styles";

let sizes = {
    sm: "50px",
    md: "100px",
    lg: "150px"
}

let iconStyles = (icon, background, size) =>({
    backgroundImage: `url(${icon})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: background,
    borderRadius: "100%",
    height: sizes[size],
    width: sizes[size],
    minHeight: sizes[size],
    minWidth: sizes[size]
})

const LinkCard = ({title, description, icon, iconBackground, size, url}) => (
    <Link to={url} className="width-100 height-100 margin-x-sm margin-bottom-md">
        <Paper className="col-xs row-md justify-start align-center padding-y-sm height-100 ">
            <div style={iconStyles(icon, iconBackground, size)} className="margin-bottom-sm margin-x-md"></div>

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
    icon: PropTypes.string.isRequired,
    iconBackground: PropTypes.string,
    url: PropTypes.string,
}

LinkCard.defaultProps = {
    size: "md",
    iconBackground: "white"
};

export { LinkCard }