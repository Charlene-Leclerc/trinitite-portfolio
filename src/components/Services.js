import React from 'react';
import { ServicesModel } from "../models/service-mod"
import '../styles/services.scss'


const Services = () => {




    return (
        <section className='services' id='services'>
            <div className="service-container">
                {ServicesModel.map(service => (
                    <div className="services-box" key={service.id}>
                        {service.isImage ?
                            <img src={service.img} alt='' /> :
                            <video loop autoPlay>
                                <source src={service.img} />
                            </video>
                        }
                        <div className="layer">
                            <div className="text-box">
                                <h2>{service.title}</h2>
                                <h3 className='italic'>{service.resume}</h3>
                                <h3 className='bold'>{service.details}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;