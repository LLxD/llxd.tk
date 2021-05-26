import React from 'react'
import Project from '../../Project'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Ocinemae = () => {
    return (
        <>
            <Navbar />
            <Project titulo={"LIM Engenharia"} desc={"Um site para uma empresa de engenharia civil"} img={"/"} />
            <Footer />
        </>
    )
}

export default Ocinemae
