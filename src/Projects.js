import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardProjeto from './components/CardProjeto'
import axios from 'axios';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    

        const loadprojects = () => {
            axios.get('https://8080-coffee-giraffe-xgorb5cw.ws-us11.gitpod.io/api/collections/get/Project?token=6844ca688dba44eed6f048bcc95b2f').then((response) => {
                setProjects(response.data.entries)
            });
        };

        useEffect(() => {
            loadprojects();
        }, []);

        console.log(projects)

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

                        {projects.map((project) => (
                            <>
                            <CardProjeto online={project.online} code={project.code} url={project.url} titulo={project.projectTitle} desc={project.projectDescription} lang={project.projectLanguages} />
                            </>
                ))}

                            <CardProjeto online={1} code={"https://github.com/ArticaDev/fatima-imoveis"} url={"http://fatimacorretora.com/casas"} titulo={"Fátima Imóveis"} desc={"Um site para uma corretora de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/braga-corretor"} url={"http://bragacorretor.com/casas"} titulo={"Braga Corretor"} desc={"Um site para um corretor de imóveis"} lang={"HTML CSS JS laravel"} />
                            <CardProjeto online={1} code={"https://github.com/roboforgeufu/roboforgeufu.github.io"} url={"https://roboforgeufu.github.io/"} titulo={"Roboforge"} desc={"Um site para uma equipe de robótica universitária"} lang={"HTML CSS JS"} />
                            <CardProjeto online={1} code={"https://github.com/roboforgeufu/sutive"} url={"https://roboforgeufu.github.io/sutive/"} titulo={"Sutive"} desc={"Um site para uma ideia hospitalar contra a COVID-19"} lang={"HTML CSS JS"} />
                            <CardProjeto code={"https://github.com/ArticaDev/rent-receipt"} titulo={"Gerador de Recibos"} desc={"Uma aplicação que gera recibos de usuários cadastrados"} lang={"Electron JS"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/limengenharia"} url={"https://limengenharia.com/"} titulo={"LIM Engenharia"} desc={"Um site para uma empresa de engenharia civil"} lang={"React"} />
                            <CardProjeto code={"https://github.com/LLxD/draftools"} titulo={"Draftools"} desc={"Um site que faz análises de composições para League of Legends"} lang={"React"} />
                            <CardProjeto online={1} code={"https://github.com/LLxD/abelinhas"} url={"http://abelinhas.ml/"} titulo={"Abelinhas"} desc={"Um site para pedidos de bordados, feito para minha namorada :D"} lang={"HTML CSS JS"} />
                            <CardProjeto online={1} code={"https://github.com/ArticaDev/impulsiona-seguidores"} url={"https://www.impulsionaseguidores.net/"} titulo={"Impulsiona Seguidores"} desc={"Um site desenvolvido com Gatsby, SSR e mais para um cliente que desejava um site com muita performance."} lang={"React Gatsby Tailwind"} />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Projects
