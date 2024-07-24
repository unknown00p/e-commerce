import React, { useEffect } from 'react'
// import Button from '../index'
import { logout } from '../../FetchFunc/fetchUserApi'
import { useDispatch } from 'react-redux'
import { logout as storeLogout } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Token = Cookies.get("Token")

  
  async function logoutFunc(params) {
    const loggedOut = await logout()
    if (loggedOut) {
      Cookies.remove("Token")
      dispatch(storeLogout())
      navigate("/")
    }
  }

  useEffect(() => {
    async function LogoutWhenTokeExpires(params) {
      if (!Token) {
        logoutFunc()        
      }
    }

    LogoutWhenTokeExpires()
  },[Token])

  return (
    <button onClick={logoutFunc}>
      Log out
    </button>
  )
}

export default Logout
