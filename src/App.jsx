import { useState, useEffect } from 'react'
import { getCurrentUser } from './FetchFunc/fetchUserApi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './store/userSlice'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Protected from './utils/Protected'
import { Home, AddProducts } from './components'
import { AddProducts_page, Login_page, Signup_page } from "./pages/index_page"
import { Product, Category, Menu } from "./components"
// import UnProtected from './utils/UnProtected'
import { currentUserData } from './store/userSlice'
import Cookies from "js-cookie"
import { getUserCart } from './FetchFunc/fetchCart'
import { addProductsToCart } from './store/CartSlice'
import Profile from './components/products/Profile'
import { getAllProducts } from './FetchFunc/fetchProducts'
import { allProducts } from './store/productSlice'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetched(params) {
      const Token = Cookies.get("Token")

      if (Token) {
        const UserCart = await getUserCart()
        dispatch(addProductsToCart(UserCart.data.data.items))
      }

      if (Token) {
        try {
          const currentUser = await getCurrentUser()
          if (currentUser) {
            dispatch(currentUserData(currentUser.data.data))
            // console.log(currentUser.data.data._id);
            const currentUserId = currentUser.data.data._id
            if (currentUserId) {
              const getAllProductsResponce = await getAllProducts(currentUser.data.data._id)
              const products = getAllProductsResponce.data.data.products;
              dispatch(allProducts(products))
            }
          }
        } catch (error) {
          console.log("error in app while getting the current user: ", error);
        }
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
            <Route path="menu" element={<Menu />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="order" element={<Category />} />
            <Route path="login" element={<Login_page />} />
            <Route path="Signup" element={<Signup_page />} />
            <Route path="profile" element={<Profile />} />
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