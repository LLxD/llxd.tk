import React from 'react'
import Project from '../../Project'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Ocinemae = () => {
    return (
        <>
            <Navbar />
            <Project titulo={"Podcasts - O Cinema É"} desc={"Um site que contém podcasts sobre cinema"} img={"/"} />
            <Footer />
        </>
    )
}

export default Ocinemae
