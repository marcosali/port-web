import React, { useEffect } from 'react';
import './Redes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTiktok, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Redes = () => {
    useEffect(() => {
        const btnScrollUp = document.getElementById('btn-scroll-up');
        btnScrollUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Hace que el desplazamiento sea suave
            });
        });
    }, []);

    return (
        <footer className="redes-container">
            <div className="footer-content">
                <a href="#inicio" id="btn-scroll-up"><FontAwesomeIcon className='flecha bg-yellow-400 w-10 h-10 rounded-full' icon={faArrowUp} /></a>
                <br /><br />
                <a href="https://www.facebook.com/profile.php?id=100008948221444&mibextid=ZbWKwL"><FontAwesomeIcon className='bg-blue-500 w-10 h-10 rounded-full' icon={faFacebook} /></a>
                <a href="/"><FontAwesomeIcon className='bg-red-500 w-10 h-10 rounded-full' icon={faTiktok} /></a>
                <a href="/"><FontAwesomeIcon className='bg-purple-500 w-10 h-10 rounded-full' icon={faInstagram} /></a>
                <a href="/"><FontAwesomeIcon className='bg-blue-400 text-white w-10 h-10 rounded-full p-2' icon={faTwitter} /></a>
                <p> Marco Salinas © 2024</p>
            </div>
        </footer>
    );
}

export default Redes;
