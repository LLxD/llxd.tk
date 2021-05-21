import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const CV = () => {
    return (
        <>
            <Navbar />
            <main className="page cv-page">
                <section className="portfolio-block cv">
                    <div className="container">
                        <div className="work-experience group">
                            <div className="heading">
                                <h2 className="text-center">experiência de trabalho</h2>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Front-End Developer</h3>
                                        <h4 className="organization">Artica Dev Team</h4>
                                    </div>
                                    <div className="col-md-6"><span className="period">Freelancing</span></div>
                                </div>
                                <p className="text-muted">Trabalho com um time de desenvolvimento, fazendo diferentes trabalhos de freelancing, onde nós fazemos websites,&nbsp; e-commerces, aplicativos e soluções de software para aumentar e criar um mercado digital para lojas e/ou clientes. Utilizamos tecnologias variadas para realizarmos nossos projetos, como React e React Native.</p>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-6">
                                        <h3>Software Developer</h3>
                                        <h4 className="organization">Roboforge Robotics</h4>
                                    </div>
                                    <div className="col-md-6"><span className="period">2018 - Presente</span></div>
                                </div>
                                <p className="text-muted">Trabalhei como desenvolvedor de software, usando Python para desenvolver robôs autônomos para competições nacionais, além disso, trabalhei com desenvolvimento front-end, usando JS, HTML e CSS para fazer o site da equipe.</p>
                            </div>
                        </div>
                        <div className="education group">
                            <div className="heading">
                                <h2 className="text-center">educação e cursos</h2>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3><strong>Bacharel em Engenharia Mecatrônica</strong><br /></h3>
                                        <h4 className="organization">UFU - Universidade Federal de Uberlândia<br /></h4>
                                    </div>
                                    <div className="col-6"><span className="period">2017 - Presente</span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-xxl-6">
                                        <h3><strong>Cursos em JavaScript, HTML, CSS,&nbsp;React, UI/UX Design.</strong></h3>
                                        <h4 className="organization">Online e durante a faculdade</h4>
                                    </div>
                                    <div className="col-md-6"><span className="period">2018 - Presente</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="row">
                                <div className="col-md-6 col-xxl-12">
                                    <div className="contact-info portfolio-info-card">
                                        <h2>Informações de Contato</h2>
                                        <div className="row">
                                            <div className="col-1"><i className="icon ion-android-calendar icon" /></div>
                                            <div className="col-9"><span>08/02/1999</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1"><i className="icon ion-person icon" /></div>
                                            <div className="col-9"><span>Lucas Lima do Nascimento</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1"><i className="icon ion-ios-telephone icon" /></div>
                                            <div className="col-9"><span>(17) 98231-5206</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1"><i className="icon ion-at icon" /></div>
                                            <div className="col-9"><span>limalucas454@gmail.com</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default CV
