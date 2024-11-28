import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function OutletComp() {
    return (
        <div className='max-w-[1440px] mx-auto'>
            lol
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default OutletComp
