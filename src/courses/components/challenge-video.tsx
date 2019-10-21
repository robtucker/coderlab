import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { palette } from "../../styles";

const ChallengeVideo = ({url, close, show, contentWidth, contentHeight}) => {
    let height = contentHeight * 0.8;
    let width = height * 1.8;

    //console.log('video', url, close, show)
    if(!show) return null;
    
    
    return (
        <section className="absolute width-100 height-100" style={{zIndex: 10, minHeight: contentHeight}}>
            <div className="col justify-center align-center width-100 height-100">
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
            </div>
        </section>
    );
}

export { ChallengeVideo }
