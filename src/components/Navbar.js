import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="/">Lucas Lima</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/projects">Projetos</a></li>
                        <li className="nav-item"><a className="nav-link" href="/cv">CV</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/contact">Fale Comigo</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
