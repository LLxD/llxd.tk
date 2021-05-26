import React from 'react'
import Project from '../../Project'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Ocinemae = () => {
    return (
        <>
            <Navbar />
            <Project titulo={"Gerador de Recibos"} desc={"Uma aplicação que gera recibos de usuários cadastrados"} img={"/"} />
            <Footer />
        </>
    )
}

export default Ocinemae
