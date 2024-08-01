import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, getUserCart } from '../../FetchFunc/fetchCart'
import { getProduct } from '../../FetchFunc/fetchProducts'
import Input from '../formCompo/Input'
import { useDispatch } from 'react-redux'

function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  async function addTocart(params) {

    try {
      const userCart = await getUserCart()
      console.log(userCart);
      // incriment the qunatity of cart 
      const lastCartQuantity = userCart.data.data.items.slice(-1)[0]?.quantity
      let quantity = !lastCartQuantity ? 1 : lastCartQuantity + 1

      // check if the product is already in the cart
      const cart = userCart.data.data.items.find((cart) => cart.product._id === productId)

      if (!cart) {
         await addToCart(productId, quantity)
      }
    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    async function getSingleProduct() {
      const productDetails = await getProduct(productId)
      setProduct(productDetails.data.data)
    }

    getSingleProduct()
  }, [productId])

  return (
    <>
      {product &&
        <div className="container mx-auto p-20 roboto-condensed-regular">
          <div className="flex justify-center gap-16">
            <section className="w-1/2">
              <div>
                <img src={product.mainImage.url} alt={product.name} className="w-full h-[24rem] hover:scale-105 shadow-lg transition-all" />
              </div>
              <div className="flex gap-3 mt-5">
                {product && product.subImages.map((images, index) => (
                  <img key={index} className="w-24 h-24 shadow-sm" src={images.url} alt={product.name} />
                ))}
              </div>
            </section>
            <section className="w-1/2 pl-10">
              <div>
                <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                <p className="text-2xl text-gray-700 mb-4">₹{product.price}</p>
                <input
                  className="border border-gray-400 outline-none pr-2 w-20 py-1 text-center"
                  type="number"
                  min="1"
                  max={product.stock}
                  defaultValue="1"
                />
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <button onClick={addTocart} className="px-6 py-3 bg-[#7f703d] text-white shadow-md hover:bg-[#7f703db5]">Add to Cart</button>
                <button className="px-6 py-3 bg-black text-white shadow-md hover:bg-[#000000b0]">Buy Now</button>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-2">Product Info</h3>
                <p>{product.description}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Return and Refund Policy</h3>
                <p>Your return and refund policy details here.</p>
              </div>
            </section>
          </div>
        </div>
      }
    </>
    // <div></div>
  )
}

export default Product
