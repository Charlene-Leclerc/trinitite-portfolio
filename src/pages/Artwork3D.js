import React, { useEffect } from 'react';
import { Artwork3DImages, Artwork3DVideos } from '../models/artwork-images';
import mainImg from '../images/artwork3D/steve-henry-beauty-01.jpg';
import '../styles/artwork3d.scss';
import gameboyShowcase from '../videos/Gameboy_Vanilla_rotate.mp4'
const Artwork3D = () => {
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0));
    }, []);
    return (
        <>


            <div className="header-img">
                <img src={mainImg} alt='' />
                <div className="text-box">
                    <h1>ARTWORK 3D SHOWCASE</h1>
                    <h3>Nos création 3D, moteur temps réel</h3>
                </div>
            </div>
            <div className="video-div">
                <div className="header-video">
                    <video controls >
                        <source src={gameboyShowcase} />
                    </video>
                </div>

                <div className="grid-video">
                    {Artwork3DVideos.map(video => (
                        <div className="box" key={video}>

                            <video controls >
                                <source src={video} />
                            </video>

                        </div>
                    ))}
                </div>
            </div>
            <div className="grid-img">
                {Artwork3DImages.map(img => (
                    <div className="box" key={img}>

                        <img src={img} alt='' /> :

                    </div>
                ))}
            </div>

        </>
    );
};

export default Artwork3D;