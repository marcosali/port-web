import React, { useState, useEffect } from 'react';
import './Home.css';
import marcodev from '../assets/devfrom.png';

const Home = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(true);
        }, 1000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div id='Home' className="home">
            <div className="title">
                <h1 className={showAnimation ? "writing-effect" : ""}>Hey, soy Marco <span className="cl-text">Salinas</span></h1>
                <a href="https://www.linkedin.com/in/marco-antonio-salinas-solis-9b90bb21a/">Disponible para trabajar.</a>
            </div>

            <div className="content">
                <div className="text">
                    <p>+2 años de experiencia. <span className="cl-text">Desarrollador Web y creador de páginas web. De Cali, Colombia</span>. Especializado en crear aplicaciones llamativas.</p>
                </div>

                <div className="foto">
                    <a href="/">
                        <img src={marcodev} alt="foto" className="foto-img" />
                    </a>
                </div>
            </div>

            <div className="icon">
                <a href="https://www.linkedin.com/in/marco-antonio-salinas-solis-9b90bb21a/">
                    <svg className="linkeding" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                </a>
                <a href="https://github.com/marcosali/portafolio/blob/main/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <a href="https://mail.google.com/mail/u/0/?hl=es_419#inbox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </div>
        </div>
    )
}

export default Home;
