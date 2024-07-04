import React,{useEffect} from 'react'
// import Button from '../index'
import { logout } from '../../FetchFunc/fetchUserApi'
import { useDispatch } from 'react-redux'
import {  logout as storeLogout } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function logoutFunc(params) {
    
    const loggedOut = await logout()
    console.log(loggedOut);
    if (loggedOut) {
      // localStorage.clear("accessToken")
      // localStorage.clear("refreshToken")
      const dispatched = dispatch(storeLogout())
      navigate("/")
    }
  }
  

  return (
    <button onClick={logoutFunc}>
      Log out
    </button>
  )
}

export default Logout
