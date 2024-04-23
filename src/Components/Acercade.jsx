import React from 'react'
import './Acercade.css'

const Acercade = () => {
    return (
        <div id='Acercade' className="acercade">
            <div className="title1">
                <h1>Acerca <span>de mi</span></h1>
            </div>

            <div className="texto">
                <p><span>&mdash;&mdash;&mdash; Datos personales</span></p>
                <p>Hola, soy Marco Antonio Salinas, un apasionado técnico en sistemas y desarrollador web con más de 2 años de experiencia en el campo de la tecnología. Desde mis primeros días explorando el mundo de la informática, he estado fascinado por cómo la tecnología puede transformar la forma en que vivimos, trabajamos y nos comunicamos. Comencé mi carrera obteniendo una formación sólida en sistemas informáticos, donde adquirí un profundo conocimiento en hardware, software y redes. Mi curiosidad y deseo de aprender me llevaron a especializarme en el desarrollo web, donde descubrí mi verdadera pasión.</p>

                {/* INTERECES */}
                <p><span>&mdash;&mdash;&mdash; Intereses</span></p>
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-airpods" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4a4 4 0 0 1 4 3.8l0 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8l0 -.2a4 4 0 0 1 4 -4z" /><path d="M18 4a4 4 0 0 0 -4 3.8l0 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8l0 -.2a4 4 0 0 0 -4 -4z" /></svg>
                    MUSICA
                </div>
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" /><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" /><path d="M8 9v2" /><path d="M7 10h2" /><path d="M14 10h2" /></svg>
                    JUEGOS
                </div>
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-beach" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" /><path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" /><path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" /><path d="M15 9l-3 5.196" /><path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" /></svg>
                    VIAJAR
                </div>
                <br />
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ball-football" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" /><path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" /></svg>
                    DEPORTE
                </div>
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 8h4" /><path d="M9 16h4" /><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" /><path d="M14 9l4 -1" /><path d="M16 16l3.923 -.98" /></svg>
                    LIBROS
                </div>
                <div className="interces">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-motorbike" style={{ height: '50px', width: '50px'}}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" /><path d="M13 6h2l1.5 3l2 4" /></svg>
                    MOTOS
                </div>
            </div>
        </div>
    )
}

export default Acercade;
