import React from 'react';
import '../styles/shop.scss';
import etsy from '../images/Etsy_Shop_Trinitite.png';
import winston from '../images/winston.jpg';
import gameboy from '../images/gameboy.jpg';


const Shop = () => {
    return (
        <div className="shop">
            <div className="box">
                <img src={etsy} alt="" />
                <div className="layer">
                    <div className="resume">
                        <h2>CONTACTEZ NOUS</h2>
                        <h3>OUVERT AUX OPPORTUNITES</h3>

                        <a href="https://www.etsy.com/shop/trinititestudio/?etsrc=sdt" target='_blank' rel="noreferrer">
                            <button> Contactez nous</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="box">
                <img src={winston} alt="" />
                <div className="layer">
                    <div className="resume">
                        <h2>ARTWORK 2D</h2>
                        <h3>CREATIONS 2D TRADITIONNELLE / <br />PIXEL ART</h3>

                        <a href='#'>
                            <button>More Here</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="box">
                <img src={gameboy} alt="" />
                <div className="layer">
                    <div className="resume">
                        <h2>ARTWORK 3D</h2>
                        <h3>CREATIONS 3D TEMPS REEL / <br />PROTOTYPAGE</h3>

                        <a href="#">
                            <button>More Here</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Shop;