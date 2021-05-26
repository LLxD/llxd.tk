import React from 'react'

const Projeto = (props) => {

    let color = "#0ea0ff"

    if (props.lang.includes("React")) {
        color = "orange"
    }
    else if (props.lang.includes("Electron")) {
        color = "black"
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="project-card-no-image" style={{ borderTop: "4px solid " + color }}>
                <h3>{props.titulo}</h3>
                <h4>{props.desc}</h4><a className="btn btn-outline-primary btn-sm" role="button" href={props.url}>Saiba Mais</a>
                <div className="tags">{props.lang}</div>
            </div>
        </div >
    )
}

export default Projeto
