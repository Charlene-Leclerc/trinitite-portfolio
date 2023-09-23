import React from 'react';
//import baniere from '../images/Baniiere_Artstation.jpg'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='studio-container'>
                {/*<img src={baniere} alt="" />*/}
                <div className="box">
                    <h1>TRINITITE STUDIO</h1>
                    <h3>Studio indépendant de développement de jeux vidéo</h3>
                </div>

            </div>
        </section>
    );
};

export default Home;