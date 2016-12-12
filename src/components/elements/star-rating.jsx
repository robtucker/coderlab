import React,  { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { typography } from "../../styles";
import {yellow600, grey500} from 'material-ui/styles/colors';

const yellow = {
    color: yellow600,
};

const grey = {
    color: grey500,
}

const outOf = 5;

let getStars = (count) => {
    let res = [];
    for(var i = 1; i < outOf + 1; i++) {
        var isYellow = i > count ? false : true;
        res.push(<i key={i} className="material-icons" style={isYellow ? yellow : grey}>star</i>);
    }
    return res;
}

const StarRating = ({count}) => (
    <span>
        {getStars(count)}
    </span>
)

StarRating.propTypes = {
    count: PropTypes.number.isRequired
}

export { StarRating } 
    