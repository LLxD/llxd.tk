import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="page contact-page">
                <section className="portfolio-block contact">
                    <div className="container">
                        <div className="heading">
                            <h2>Fale comigo</h2>
                        </div>
                        <form>
                            <div className="mb-3"><label className="form-label" htmlFor="name">Seu nome</label><input className="form-control item" type="text" id="name" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="subject">Assunto</label><input className="form-control item" type="text" id="subject" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control item" type="email" id="email" /></div>
                            <div className="mb-3"><label className="form-label" htmlFor="message">Mensagem</label><textarea className="form-control item" id="message" defaultValue={""} /></div>
                            <div className="mb-3"><button className="btn btn-primary btn-lg d-block w-100" type="submit">Enviar</button></div>
                        </form>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Contact
