import React from 'react'
import Project from '../../Project'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Ocinemae = () => {
    return (
        <>
            <Navbar />
            <Project titulo={"Roboforge"} desc={"Um site para uma equipe de robótica universitária"} img={"/"} />
            <Footer />
        </>
    )
}

export default Ocinemae
