import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_463ayvj', 'template_k6o7fiq', e.target, 'user_wijitefIEDkhI5V2ImE8c')
            .then((result) => {
                console.log(result.text);
                document.getElementById('alerta').classList.remove('d-none');
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <>
            <Navbar />
            <main className="page contact-page">
                <section className="portfolio-block contact">
                    <div className="container">
                        <div className="heading">
                            <h2>Fale comigo</h2>
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="mb-3"><label className="form-label" htmlFor="name">Seu nome</label><input className="form-control item" name="name" type="text" id="name" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="subject">Assunto</label><input className="form-control item" name="subject" type="text" id="subject" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control item" name="email" type="email" id="email" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="message">Mensagem</label><textarea className="form-control item" name="message" id="message" defaultValue={""} /></div>
                            <div className="mb-3"><button className="btn btn-primary btn-lg d-block w-100" type="submit">Enviar</button></div>
                            <div id="alerta" className="alert alert-success alert-dismissible d-none mt-4" role="alert">
                                Email enviado!
              </div>
                        </form>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Contact
