import React, { useRef } from 'react';
import '../styles/contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_892ijfv', 'template_o2wg417', form.current, 'gTDTWOwvJnf8bXXKP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section className="contact" id='contact'>
            <h2>Contactez Nous</h2>
            <div className='contact-container'>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <label>Nom et Prénom*</label>
                        <input type="text" placeholder='Nom Prénom' name='user_name' required />
                    </div>
                    <div className="row">
                        <label>E-mail*</label>
                        <input type="email" placeholder='YourMail@gmail.com' name='user_email' required />
                    </div>
                    <div className="row">
                        <label>Objet</label>
                        <input type="text" placeholder='Sujet' name='subject' />
                    </div>
                    <div className="row">
                        <label>Message</label>
                        <textarea name="message" cols="30" rows="10" placeholder='Ecrivez votre message'></textarea>
                    </div>
                    <button type='submit' className='btn'>Envoyez le message</button>

                </form>
            </div>
        </section>
    );
};

export default Contact;