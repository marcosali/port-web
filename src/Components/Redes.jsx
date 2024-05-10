import React, { useEffect } from 'react';
import './Redes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
                <a href="#inicio" id="btn-scroll-up"><FontAwesomeIcon className='bg-yellow-400 w-10 h-10 rounded-full' icon={faArrowUp} /></a>
            </div>
            
        </footer>
    );
}

export default Redes;
