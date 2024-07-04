import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { Header } from '../components'
import Cookies from "js-cookie"

function Protected() {
    // i have to add logic
    // const authenticated = Cookies.get("userToken")
    return (
        <>
        <div className='overflow-x-hidden'>
            <Header />
            <Outlet />
        </div>
            {/* {authenticated ? <Outlet /> : <Navigate to="/login" />} */}
        </>
    )
}

export default Protected
