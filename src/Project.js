const Project = (props) => {
    return (
        <main className="page project-page">
            <section className="portfolio-block project">
                <div className="container">
                    {/* Start: portfolio heading */}
                    <div className="heading">
                        <h2>{props.titulo}</h2>
                    </div>{/* End: portfolio heading */}
                    <div className="image" style={{ backgroundImage: props.img }} />
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-1 info">
                            <h3>Descrição</h3>
                            <p>{props.desc}</p>
                        </div>
                        <div className="col-12 col-md-6 offset-md-1 info">
                            <h6 className="text-black-50">Tecnologias Utilizadas</h6>
                            <h6 className="text-black-50">{props.tech}</h6>
                        </div>
                    </div>
                    <div className="more-projects">
                        <h3 className="text-center">Outros Projetos</h3>
                        <div className="row gallery">
                            <div className="col-md-4 col-lg-3">
                                <div className="item"><a href="/"><img alt="" className="img-fluid scale-on-hover" src="assets/img/nature/image2.jpg" /></a></div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="item"><a href="/"><img alt="" className="img-fluid scale-on-hover" src="assets/img/nature/image3.jpg" /></a></div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="item"><a href="/"><img alt="" className="img-fluid scale-on-hover" src="assets/img/tech/image4.jpg" /></a></div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="item"><a href="/"><img alt="" className="img-fluid scale-on-hover" src="assets/img/nature/image5.jpg" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Project
