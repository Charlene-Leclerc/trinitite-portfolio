import '../styles/navigation.scss';
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../images/LOGO_Trinititestudio_black.png';


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
                        <Nav.Link eventKey="1" className="nav-link" href="#home">Accueil</Nav.Link>
                        <Nav.Link eventKey="2" className="nav-link" href="#about">A Propos</Nav.Link>
                        <Nav.Link eventKey="3" className="nav-link" href="#gallery">Galerie</Nav.Link>
                        <Nav.Link eventKey="4" className="nav-link" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;