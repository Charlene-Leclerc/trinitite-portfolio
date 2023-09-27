import React from 'react';
import Navigation from '../components/Navigation';
import winston from '../images/artwork2D/winston_full.jpg';
import '../styles/artwork2d.scss';
import { ArtowrkImages } from '../models/artwork2d-images';
const Artwork2D = () => {
    return (
        <div className='main-div'>
            <Navigation />

            <div className="displayer">
                <div className="img">
                    <img src={winston} alt='' />
                </div>
                <div className="text">
                    <h2>ARTWORK 2D SHOWCASE</h2>
                    <h3>CREATIONS EN 2D TRADITIONNELLE / PIXEL ART</h3>
                </div>
            </div>

            <div className="grid">
                {ArtowrkImages.map(artwork => (
                    <div className="box" key={artwork.id}>

                        <img src={artwork.img} alt='' /> :

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Artwork2D;