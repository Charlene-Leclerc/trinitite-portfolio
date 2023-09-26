import React from 'react';
import Shop from './Shop';
import ArtworkSlider from './ArtworkSlider';
import { ArtworkModel } from '../models/artwork-slider';

const Gallery = () => {
    return (
        <section className='gallery' id='gallery'>
            <Shop />
            <ArtworkSlider slides={ArtworkModel} />
        </section>

    );
};

export default Gallery;