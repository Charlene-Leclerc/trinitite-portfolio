import '../styles/navigation.scss';
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../images/LOGO_Trinititestudio_black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faArtstation, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons';


const Navigation = () => {
    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="md" className='navbar'>
                <Container>
                    <div className="studio-box">
                        <img src={logo} alt="" className='logo-nav' />
                        <Navbar.Brand href="#home" className='navbar-brand'>TRINITITE <br />STUDIO</Navbar.Brand>
                    </div>

                    <Nav>
                        <Nav.Link className="nav-link" href="#home">Accueil</Nav.Link>
                        <Nav.Link className="nav-link" href="#about">A Propos</Nav.Link>
                        <Nav.Link className="nav-link" href="#services">Services</Nav.Link>
                        <Nav.Link className="nav-link" href="#gallery">Galerie</Nav.Link>
                        <Nav.Link className="nav-link" href="https://www.facebook.com/TrinititeStudio">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="https://twitter.com/FranzLaFronde">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="https://maccreene.artstation.com/">
                            <FontAwesomeIcon icon={faArtstation} />
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="https://www.instagram.com/trinitite_studio/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="https://www.etsy.com/shop/trinititestudio/?etsrc=sdt">
                            <FontAwesomeIcon icon={faEtsy} />
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;