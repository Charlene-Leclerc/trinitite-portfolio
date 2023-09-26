import React from 'react';
import Shop from './Shop';
import ArtworkSlider from './ArtworkSlider';
import { ArtworkModel } from '../models/artwork-slider';
import VideoSlider from './VideoSlider';

const Gallery = () => {
    return (
        <section className='gallery' id='gallery'>
            <Shop />
            <ArtworkSlider slides={ArtworkModel} />
            <VideoSlider />
        </section>

    );
};

export default Gallery;