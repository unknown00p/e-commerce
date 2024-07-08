import React, { useEffect, useReducer, useState } from 'react'
import { getAllProducts } from '../../FetchFunc/fetchEcommerceApi'
import { products as storeProducts } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import Category from '../products/Category'
import Cookies from "js-cookie"
import Footer from '../header/Footer'
import LoggedInHero from './LoggedInHero'
import LoggedOutHero from './LoggedOutHero'


function Home() {

  const userData = useSelector((state)=> state.auth.userData)
  const Token = Cookies.get("Token")
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [token, setToken] = useState(Token)
  const navigate = useNavigate()


  useEffect(() => {
    async function userFromLocal() {
      if (!Token) {
        setToken(userData);
      }
    }

    userFromLocal();
  },[userData]);

  async function fetch() {
    try {
      const products = await getAllProducts()
      if (products) {
        const allProducts = (products.data.data.products);
        dispatch(storeProducts(allProducts))

        const someProduct = allProducts.slice(0, 3)
        setProducts(someProduct)
      }
    } catch (error) {
      setError("Getting issue while fetching the products")
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return <>
    {token ? (
      <>
        <LoggedInHero />

        <div>
          <div className='text-center mt-10 text-4xl'>Products</div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
                {products && products.map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={product.mainImage.url}
                          alt="mainImage"
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            {/* < to={product.href}> */}
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                            {/* </> */}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                      {/* {isUser && <div>
                        <button>Add to Cart</button>
                      </div>} */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <>
        <LoggedOutHero />
      </>
    )}

  </>
}

export default Home