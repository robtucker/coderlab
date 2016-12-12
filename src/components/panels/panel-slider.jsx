import React, { Component } from 'react';
import Slider from 'react-slick';
import { ImagePanel } from "./image-panel";
import { ArrowBox } from "../elements/arrow-box";

import slick from "slick-carousel/slick/slick.scss";
import slickTheme from "slick-carousel/slick/slick-theme.scss";

var Carousel = require('nuka-carousel');


class PanelSlider extends Component {

    render () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 200,
            autoplay: true,
            pauseOnHover: false
        };
        return (


            <Slider {...settings}>
                {this.props.panels.map((panel) => (
                    <div key={panel.id}> 
                        <ImagePanel  img={panel.img} className="white overlay-50" bgColor={panel.bgColor}>
                            <h1 className="margin-bottom-sm">{panel.title}</h1>
                            <h3 className="margin-bottom-lg">{panel.subtitle}</h3>
                            <ArrowBox url={panel.url}/>
                        </ImagePanel>
                    </div>
                ))}
            </Slider>
        );
    }
}

export { PanelSlider }
