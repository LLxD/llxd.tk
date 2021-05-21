import React from 'react'

const Projeto = (props) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="project-card-no-image">
                <h3>{props.titulo}</h3>
                <h4>{props.desc}</h4><a className="btn btn-outline-primary btn-sm" role="button" href={props.url}>Saiba Mais</a>
                <div className="tags"><a href="#">{props.lang}</a></div>
            </div>
        </div>
    )
}

export default Projeto
