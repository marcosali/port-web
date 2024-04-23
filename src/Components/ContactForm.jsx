import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setStatusMessage('Por favor, introduzca un correo electrónico válido.');
            return;
        }

        emailjs
            .sendForm('service_ycnq8ca', 'template_jpc87xk', form.current, 'Fbl56gArJCPbepGTAMEI5')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setStatusMessage('¡Formulario enviado con éxito!');
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatusMessage('Ocurrió un error al enviar el formulario. Por favor, intenta más tarde.');
                }
            );
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div>
                <label htmlFor="name">
                    Nombre:
                    <input
                        id="name"
                        name="your_name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Ingrese su nombre"
                        required
                    />
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    Correo electrónico:
                    <input
                        id="email"
                        name="your_email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Ingrese su correo electrónico"
                        required
                    />
                </label>
            </div>
            <div>
                <label htmlFor="message">
                    Mensaje:
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Escriba su mensaje aquí"
                        required
                    />
                </label>
            </div>
            <button type="submit">Enviar</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
    );
}

export default ContactForm;
