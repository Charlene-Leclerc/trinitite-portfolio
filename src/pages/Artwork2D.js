import React, { useEffect } from 'react';
import winston from '../images/artwork2D/winston_full.jpg';
import '../styles/artwork2d.scss';
import '../styles/navigation.scss'
import { Artwork2DImages } from '../models/artwork-images';

const Artwork2D = () => {
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0));
    }, []);

    return (
        <div className="main-div">
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
                {Artwork2DImages.map(img => (
                    <div className="box" key={img}>
                        <img src={img} alt='' /> :
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Artwork2D;