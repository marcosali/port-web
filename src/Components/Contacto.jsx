import React, { useRef } from 'react';
import './Contacto.css';
import ContactForm from './ContactForm';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef(null);  // Inicializa useRef con null
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ycnq8ca', 'template_jpc87xk', form.current, 'Fbl56gArJCPbepGTAMEI5')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="contacto">
                <div className="title">
                    <h1>Contacto</h1>
                </div>
                <div className="formulario">
                    <ContactForm />
                </div>
            </div>
        </form>
    );
}

export default Contacto;
