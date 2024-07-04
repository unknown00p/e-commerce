import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { Header } from '../components'
import Cookies from "js-cookie"

function UnProtected() {
    // i have to write logic
    const authenticated = Cookies.get("userToken")
    return (
        <>
            <Header />
            {authenticated ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

export default UnProtected
