import React from 'react';
import Members from './Members';
import logo from '../images/Rework_LOGO_Trinitite_Black_BG.png';
import '../styles/about.css';

const About = () => {
    return (
        <section className="about" id='about'>
            <div className='about-container'>
                <div className="box">
                    <img src={logo} alt="" className='logo-about' />
                    <div className="resume">
                        <h2>A PROPOS DE NOUS</h2>
                        <h3>DEVELOPPEUR ET GRAPHISTES/DESGINER</h3>
                        <p>
                            Nous sommes un jeune studio, animé par une vrai passion.
                            Ouvert à tous les projets, nous développons principalement sur PC et MOBILE.
                            Nos champs de compétence sont variées ( Assets temps réel, Logo, Motion Design, Plan de construction 3D etc.).
                            Un sujet vous intéresse mais n'est pas listé ci-dessus? Contactez-nous via trinititestudio@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="members">
                <Members />
            </div>
        </section>
    );
};

export default About;