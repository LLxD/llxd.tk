import React from 'react'

const Projeto = (props) => {

    let color = "#0ea0ff"


    if (props.lang.toLowerCase().includes("react")) {
        color = "orange"
    }
    else if (props.lang.toLowerCase().includes("electron")) {
        color = "black"
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="project-card-no-image" style={{ borderTop: "4px solid " + color }}>
                <h3>{props.titulo}</h3>
                <h4 style={{ minHeight: "60px" }} className="mb-4">{props.desc}</h4>
                <div className="d-flex justify-content-around">
                    {props.online &&
                        <a className="btn btn-outline-primary btn-sm" role="button" href={props.url}>Veja online!</a>}
                    <a className="btn btn-outline-primary btn-sm" role="button" href={props.code}><i className="ion-social-github"></i></a>
                    <div className="tags">{props.lang}</div>
                </div>
            </div>
        </div >
    )
}


export default Projeto
