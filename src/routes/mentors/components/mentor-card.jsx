import React, { PropTypes } from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const MentorCard = ({name, subtitle, img, description}) => {

    return (
        <div>
            <Card>
                <CardMedia> 
                    <img src={img} />
                </CardMedia>

                <CardTitle title={name} subtitle={subtitle} />

                <CardText style={{minHeight: "100px"}}>{description}</CardText>
            </Card>
        
        </div>
    )
}


MentorCard.propTypes = {
    name: PropTypes.string.isRequired, 
    subtitle: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired
}

export { MentorCard }