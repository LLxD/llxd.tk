import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Navbar />

            <main className="page landing-page">
                <section className="portfolio-block block-intro">
                    <div className="container">
                        <div className="avatar" style={{ backgroundImage: 'url("assets/img/avatars/avatar.jpg")' }} />
                        <div className="about-me mb-4">
                            <p className="text-start">Olá 😃! Eu sou o Lucas, um desenvolvedor front-end que reside no Brasil, sou apaixonado por UX/UI, JavaScript e minhas duas formas de arte favoritas: design e música!</p><a className="btn btn-outline-primary" role="button" href="/contact">Me Contrate!</a>
                        </div>
                        <a className="btn btn-outline-primary" role="button" href="/projects">Meus Projetos</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App
