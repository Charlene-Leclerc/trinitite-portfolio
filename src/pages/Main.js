import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Main = () => {
    return (
        <>
            <Navigation />
            <Home />
            <About />
            <Services />
            <Gallery />
            <Contact />
            <Footer />

        </>
    );
};

export default Main;