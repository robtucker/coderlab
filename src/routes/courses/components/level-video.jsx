import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { palette } from "../../../styles";

const LevelVideo = ({url, close, showVideo}) => {
    let width = screen.width * 0.6;
    let height = screen.height * 0.6;

    if(!showVideo) {
        return null;
    }
    
    return (
        <section className="col justify-center align-center width-100 height-100 margin-y-xl">
            <div style={{backgroundColor: palette.accent2Color}}>
                <iframe 
                    width={width} 
                    height={height} 
                    src={url} 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
            <div  className="margin-y-sm">
                <FlatButton label="Skip to challenges"  onTouchTap={close} />
            </div>
        </section>
    );
}

export { LevelVideo }