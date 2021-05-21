import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projeto from './components/Projeto'

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
                            <Projeto url={"/projeto1"} titulo={"Meu Projeto"} desc={"Esse Projeto é Top"} lang={"JavaScript"} />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Projects
