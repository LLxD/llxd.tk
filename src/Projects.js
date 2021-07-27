import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardProjeto from './components/CardProjeto'
import axios from 'axios';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    

        const loadprojects = () => {
            axios.get('http://admin.llxd.tk/api/collections/get/Projects?token=fbad9318253c0f73fbdcfe7ed73bef').then((response) => {
                setProjects(response.data.entries)
            });
        };
        
        useEffect(() => {
            loadprojects();
        }, []);


        projects.sort(function compare(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
          });

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
                            <CardProjeto online={project.online} code={project.code} url={project.link} titulo={project.title} desc={project.description} lang={project.languages} />
                            </>
                ))}
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Projects
