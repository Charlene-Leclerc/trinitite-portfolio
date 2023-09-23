import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../images/LOGO_Trinititestudio_black.png'

const Navigation = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
                <Container className="container">
                    <div className="studio-box">
                        <img src={process.env.PUBLIC_URL + "/images/LOGO_Trinititestudio_black.png"} alt="" />
                        <Navbar.Brand href="#home" className='navbar-brand'>TRINITITE <br />STUDIO</Navbar.Brand>
                    </div>

                    <Nav className="me-auto">
                        <Nav.Link className="nav-link" href="#home">Accueil</Nav.Link>
                        <Nav.Link className="nav-link" href="#about">A Propos</Nav.Link>
                        <Nav.Link className="nav-link" href="#gallery">Galerie</Nav.Link>
                        <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;