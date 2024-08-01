import React, { useEffect, useReducer, useState } from 'react'
import { getAllProducts } from '../../FetchFunc/fetchProducts'
import { allProducts } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import Category from '../products/Category'
import Cookies from "js-cookie"
import Footer from '../header/Footer'
import LoggedInHero from './LoggedInHero'
import LoggedOutHero from './LoggedOutHero'


function Home() {

  const renderToken = useSelector((state)=> state.auth.renderToken)
  const Token = Cookies.get("Token")
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [token, setToken] = useState(Token)
  const navigate = useNavigate()


  useEffect(() => {
    async function userFromLocal() {
      if (!Token) {
        setToken(renderToken);
      }
    }

    userFromLocal();
  },[renderToken]);

  if (error) {
    return <div>{error}</div>
  }

  return <>
    {token ? (
      <>
        <LoggedInHero />
      </>
    ) : (
      <>
        <LoggedOutHero />
      </>
    )}

  </>
}

export default Home