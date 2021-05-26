import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardProjeto from './components/CardProjeto'

const Projects = () => {
    return (
        <>
            <Navbar />
            <main className="page projets-page">
                <section className="portfolio-block project-no-images">
                    <div className="container">
                        {/* Start: portfolio heading */}
                        <div className="heading">
                            <h2>meus projetos</h2>
                        </div>{/* End: portfolio heading */}
                        <div className="row">
                            <CardProjeto url={"/ocinemae"} titulo={"Podcasts - O Cinema É"} desc={"Um site que contém podcasts sobre cinema"} lang={"HTML CSS JS LARAVEL"} />
                            <CardProjeto url={"/fatima"} titulo={"Fátima Imóveis"} desc={"Um site para uma corretora de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto url={"/braga"} titulo={"Braga Corretor"} desc={"Um site para um corretor de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto url={"/roboforge"} titulo={"Roboforge"} desc={"Um site para uma equipe de robótica universitária"} lang={"HTML CSS JS"} />
                            <CardProjeto url={"/sutive"} titulo={"Sutive"} desc={"Um site para uma ideia hospitalar contra a COVID-19"} lang={"HTML CSS JS"} />
                            <CardProjeto url={"/aluguel"} titulo={"Gerador de Recibos"} desc={"Uma aplicação que gera recibos de usuários cadastrados"} lang={"Electron JS"} />
                            <CardProjeto url={"/lim"} titulo={"LIM Engenharia"} desc={"Um site para uma empresa de engenharia civil"} lang={"React"} />
                            <CardProjeto url={"/draftools"} titulo={"Draftools"} desc={"Um site que faz análises de composições para League of Legends"} lang={"React"} />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Projects
