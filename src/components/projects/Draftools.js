import React from 'react'
import Project from '../../Project'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Ocinemae = () => {
    return (
        <>
            <Navbar />
            <Project titulo={"Draftools"} desc={"Um site que faz análises de composições para League of Legends"} img={"/"} />
            <Footer />
        </>
    )
}

export default Ocinemae
