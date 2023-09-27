import React from 'react';
import '../styles/shop.scss';
import { ShopModels } from '../models/gallery-shop-model';
import { Link } from 'react-router-dom';


const Shop = () => {

    return (

        <div className="shop">
            {ShopModels.map(model => (
                <div className="box" key={model.id}>
                    <img src={model.image} alt='' /> :
                    <div className="layer">
                        <div className="resume">
                            <h2>{model.title}</h2>
                            <h3 className='italic'>{model.resume}</h3>

                            {model.isInternal ?

                                <Link to={model.link}>
                                    <button>{model.button}</button>
                                </Link>
                                :
                                <a href={model.link} target='blank' rel="noopener noreferrer">{model.details}
                                    <button>{model.button}</button>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Shop;