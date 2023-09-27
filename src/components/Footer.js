import React from 'react';
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faArtstation, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { LOGOS } from '../models/footer-mod';


const Footer = () => {
    return (
        <footer>
            <h3>Trinitite Studio</h3>
            <p>trinitite.studio@gmail.com</p>
            <div className="icons">
                {LOGOS.map(logo => (
                    <div key={logo.id}>
                        <Link to={logo.path} target='_blank'>
                            <FontAwesomeIcon icon={logo.icon} className='icon' />
                        </Link>
                    </div>
                ))}
            </div>
            <p className='credit'>© 2023 par Trinitite Studio</p>
        </footer>
    );
};

export default Footer;