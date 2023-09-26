import '../styles/artworkslider.scss';
import React from 'react';
import { ArtworkModel } from '../models/artwork-slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const ArtworkSlider = ({ slides }) => {


    return (

        <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
        >
            {ArtworkModel.map((slide) => {
                return (

                    <div key={slide.id} className='box'>
                        <img src={slide.image} alt="" />
                        <div className='overlay'>
                            <h2>GALERIE</h2>
                        </div>
                    </div>

                );
            })}

        </Carousel >
    );
};

export default ArtworkSlider;