import { useState } from 'react'
import { createBrowserRouter , RouterProvider,Route } from 'react-router-dom'
import Home from './pages/Home'
import OutletComp from './outlet/Outlet'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Order from './pages/Order'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <OutletComp/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "/products",
          element: <Products/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/order",
          element: <Order/>
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
