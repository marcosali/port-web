import React, { useEffect } from 'react';
import ProgressBar from './ProgressBar'; 
import './Educacion.css';

const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');
    let totalDelay = 0; 
    
    progressBars.forEach((progress) => {
        const percent = progress.getAttribute('data-percent');
        
        setTimeout(() => {
            progress.classList.add('start-animation');
        }, totalDelay); 
        
        totalDelay += percent * 20; 
    });
};

const Educacion = () => {
    useEffect(() => {
        animateProgressBars();
    }, []);

    return (
        <div id='Educacion' className="educacion">
            <div className="title3">
                <h1>Educacion <span>& Skill</span></h1>
            </div>
            <div className="contenido2">
                <p><span>&mdash;&mdash;&mdash; Educacion</span></p>
                <h3>Instituto tecnico colombiano intecol</h3>
                <p>Tecnico en sistemas</p>
                <p className='certicado'><span>certificado</span></p>
                <h3>Servicio Nacional de Aprendisaje</h3>
                <p>Analisis & Desarrollo de Software</p>
                <p><span>2023 - 2025</span></p>
                <h3>Antonio Jose Camacho</h3>
                <p>Ingenieria en Sistemas</p>
                <p><span>2020</span></p>
                <h3>UDEMY</h3>
                <p>React desde cero a experto</p>
                <p className='certicado'><span>certificado</span></p>
                <p><span>&mdash;&mdash;&mdash; Profecional Skill</span></p>

                {/* barra de progreso */}
                <ProgressBar skill="HTML/CSS" percent={90} /><br />
                <ProgressBar skill="TAILWIND" percent={60} /><br />
                <ProgressBar skill="BOOSTRAP" percent={40} /><br />
                <ProgressBar skill="JAVASCRIPT" percent={50} /><br />
                <ProgressBar skill="REACT" percent={60} /><br />
                <ProgressBar skill="PHP" percent={45} /><br />
                <ProgressBar skill="LARAVEL" percent={30} /><br />
                <ProgressBar skill="SQL" percent={35} />
            </div>
        </div>
    );
};

export default Educacion;
