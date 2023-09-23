import '../styles/members.scss';
import React from 'react';
import st_avatar from '../images/Steve_Avatar.png';
import ch_avatar from '../images/Charlene_Avatar_Square.png';


const Members = () => {
    return (
        <div className="presentation-pages">
            <div className="box">
                <img src={st_avatar} alt="" className='avatar-img' />
                <div className="data">
                    <h2>STEVE HENRY</h2>
                    <h3>Infographiste 2D/3D</h3>
                    <p className='bold'>Formations</p><br />
                    <p>
                        <li>Formation de 3ans en arts traditionnelles (Beaux-Arts)</li>
                        <li>Formation Art numérique Bac+2 (Créajeux) </li>
                    </p>
                    <a href='https://maccreene.artstation.com' target='_blank'>
                        <button> Voir le Portfolio</button>
                    </a>
                </div>
            </div>
            <div className="box">

                <img src={ch_avatar} alt='' className='avatar-img' />
                <div className="data">
                    <h2>CHARLENE LECLERC</h2>
                    <h3>Developpeuse</h3>
                    <p className='bold'>Formations<br /></p>
                    <p>
                        <li>Formation développeur jeux vidéo Bac+3 (Créajeux)</li>
                        <li>Formation développeur Full-Stack Bac+2 (en cours, 3W Academy) </li>
                    </p>
                    <a href='https://charlene-leclerc.github.io/portfolio' target='_blank'>
                        <button> Voir le Portfolio</button>
                    </a>
                </div>


            </div>
        </div>
    );
};

export default Members;