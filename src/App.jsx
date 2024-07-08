import { useState, useEffect } from 'react'
import { getCurrentUser } from './FetchFunc/fetchUserApi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './store/userSlice'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Protected from './utils/Protected'
import { Home, AddProducts } from './components'
import { AddProducts_page, Login_page, Signup_page } from "./pages/index_page"
import { Product, Category } from "./components"
import UnProtected from './utils/UnProtected'
import { currentUser } from './store/userSlice'



function App() {
  const dispatch = useDispatch()

useEffect(() => {
  
}, [])

  async function fetchCurrentUser(params) {
    try {
      const currentUser = await getCurrentUser()
      if (currentUser) {
        return currentUser
      }
    } catch (error) {
      console.log("error in app while getting the current user: ", error);
    }
  }


  useEffect(() => {
    async function fetched(params) {

      const fetchedUser = await fetchCurrentUser()
      if (fetchedUser) {
        const CurrentUserData = fetchedUser?.data.data || null
        dispatch(currentUser(CurrentUserData))
      }
    }


    fetched()


  }, []);


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Protected />} >
            <Route index element={<Home />} />
            <Route path="about" element={<div>about</div>} />
            <Route path="add-products" element={<AddProducts_page />} />
            {/* <Route path="shop" element={<Shop />} /> */}
            <Route path="product/:productId" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="login" element={<Login_page />} />
            <Route path="Signup" element={<Signup_page />} />
          </Route>
        </Route>

        {/* <Route element={<UnProtected />}> */}
          {/* <Route path="login" element={<Login_page />} />
          <Route path="Signup" element={<Signup_page />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App