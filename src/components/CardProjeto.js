import React from 'react'

const Projeto = (props) => {

    let color = "#0ea0ff"

    if (props.lang.includes("React")) {
        color = "orange"
    }
    else if (props.lang.includes("Electron")) {
        color = "black"
    }

    if (props.online === 1) {

        return (
            <div className="col-md-6 col-lg-4">
                <div className="project-card-no-image" style={{ borderTop: "4px solid " + color }}>
                    <h3>{props.titulo}</h3>
                    <h4>{props.desc}</h4>
                    <div className="d-flex justify-content-around">
                        <a className="btn btn-outline-primary btn-sm" role="button" href={props.url}>Veja online!</a>
                        <a className="btn btn-outline-primary btn-sm" role="button" href={props.code}><i className="ion-social-github"></i></a>
                        <div className="tags">{props.lang}</div>
                    </div>
                </div>
            </div >
        )
    }
    else {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="project-card-no-image" style={{ borderTop: "4px solid " + color }}>
                    <h3>{props.titulo}</h3>
                    <h4>{props.desc}</h4>
                    <div className="d-flex justify-content-around">
                        <a className="btn btn-outline-primary btn-sm" role="button" href={props.code}><i className="ion-social-github"></i></a>
                        <div className="tags">{props.lang}</div>
                    </div>
                </div>
            </div >
        )
    }

}

export default Projeto
