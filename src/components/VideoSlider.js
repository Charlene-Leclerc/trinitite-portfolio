import React from 'react';
import { VideosModel } from '../models/videos-slide-models';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/videoslider.scss'
const renderVideos = VideosModel.map((video) => (

    <div key={video.id} >


        <video width="400" controls >
            <source src={video.url} />
        </video>



        <div className="data">
            <h3>{video.name}</h3>
            <p>{video.description}</p>
        </div>

    </div>

));

const VideoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="carousel">
            <Slider {...settings} className='slider'>
                {renderVideos}

            </Slider>

        </div>

    );
};

export default VideoSlider;
