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
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/cinema-podcasts"} url={"http://podcast.ocinemae.com.br/inicio"} titulo={"Podcasts - O Cinema É"} desc={"Um site que contém podcasts sobre cinema"} lang={"HTML CSS JS LARAVEL"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/fatima-imoveis"} url={"http://fatimacorretora.com/casas"} titulo={"Fátima Imóveis"} desc={"Um site para uma corretora de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/braga-corretor"} url={"http://bragacorretor.com/casas"} titulo={"Braga Corretor"} desc={"Um site para um corretor de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto online={1} code={"https://github.com/roboforgeufu/roboforgeufu.github.io"} url={"https://roboforgeufu.github.io/"} titulo={"Roboforge"} desc={"Um site para uma equipe de robótica universitária"} lang={"HTML CSS JS"} />
                            <CardProjeto online={1} code={"https://github.com/roboforgeufu/sutive"} url={"https://roboforgeufu.github.io/sutive/"} titulo={"Sutive"} desc={"Um site para uma ideia hospitalar contra a COVID-19"} lang={"HTML CSS JS"} />
                            <CardProjeto code={"https://github.com/ArticaDev/rent-receipt"} titulo={"Gerador de Recibos"} desc={"Uma aplicação que gera recibos de usuários cadastrados"} lang={"Electron JS"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/limengenharia"} url={"https://limengenharia.com/"} titulo={"LIM Engenharia"} desc={"Um site para uma empresa de engenharia civil"} lang={"React"} />
                            <CardProjeto code={"https://github.com/LLxD/draftools"} titulo={"Draftools"} desc={"Um site que faz análises de composições para League of Legends"} lang={"React"} />
                            <CardProjeto online={1} code={"https://github.com/LLxD/abelinhas"} url={"http://abelinhas.ml/"} titulo={"Abelinhas"} desc={"Um site pedidos de bordados, feito para minha namorada :D"} lang={"HTML CSS JS"} />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Projects
