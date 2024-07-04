import React, { useEffect, useReducer, useState } from 'react'
import { getAllProducts } from '../../FetchFunc/fetchEcommerceApi'
import { products as storeProducts } from '../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Category from '../products/Category'


function Home() {

  // const userStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const isToken = localStorage.getItem("accessToken")
  const [user, setUser] = useState(isToken)
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()

  // console.log(userData);

  async function fetch() {
    const products = await getAllProducts()
    if (products) {
      const allProducts = (products.data.data.products);
      dispatch(storeProducts(allProducts))

      const someProduct = allProducts.slice(0, 3)
      setProducts(someProduct)
    }
  }

  async function userFromLocal() {
    if (userData) {
      setUser(userData)
    }
  }

  useEffect(() => {
    userFromLocal()
  })


  useEffect(() => {
    fetch()
  }, [])

  return <>
    {isToken ? (
      <>
        <div className="bg-gray-100">
          <div className="container mx-auto px-6 py-16 justify-center flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
                Welcome to Morlex
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                Explore our wide range of top-quality products that fit every budget. find everything you need at unbeatable prices!
              </p>
              <div className="mt-8">
                <Link
                  to="/shop"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/1 mt-12 md:mt-0 flex justify-center">
              <img
                src="/bag3.png"
                alt="Hero"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

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
        
        {/* <Category /> */}
      </>
    ) : (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mr-auto place-self-center lg:flex-1">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Find Your Ideal Bag for Any Occasion
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Discover the perfect bag for every occasion in our curated collection. From chic clutches to versatile totes, find your style match today!
              </p>
              <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Log in
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <div className="hidden lg:block lg:flex-1 lg:mt-0">
              <img src="./bag6.png" alt="mockup" />
            </div>
          </div>
        </section>
      </>


    )}

  </>
}

export default Home