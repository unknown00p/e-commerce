import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { Header } from '../components'
import Cookies from "js-cookie"
import Footer from '../components/header/Footer'

function Protected() {
    // i have to add logic
    // const authenticated = Cookies.get("userToken")
    return (
        <>
            <div className='px-5'>
                <Header />
                <Outlet />
                <Footer />
            </div>
            {/* {authenticated ? <Outlet /> : <Navigate to="/login" />} */}
        </>
    )
}

export default Protected
