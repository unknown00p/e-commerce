import React, { useEffect, useState } from 'react'
import { getUserCart } from '../../FetchFunc/fetchEcommerceApi';
import { useSelector } from 'react-redux';

function Cart() {
    const [cartItems, setCartItems] = useState(null)
    const cartValue = useSelector((state)=> state.cart.CartProduct)
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {

        async function cartFunc(params) {
            setCartProducts(cartValue)
        }
        
        cartFunc()
    }, [setCartItems,cartValue])

    return (
        <div className="px-4 py-6 flex flex-col justify-between">
            <div className="flow-root">
                <ul className="-my-8 h-full overflow-y-auto">
                    {cartProducts && cartProducts.map((item, index) => (
                        <li key={item.product._id} className="flex py-6 text-left">
                            <div className="shrink-0 relative w-16 h-16">
                                <img className="w-full h-full rounded-lg object-cover" src={item.product.mainImage.url} alt={item.product.name} />
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                                    </div>
                                    <button type="button" className="text-gray-500 hover:text-gray-900" onClick={() => handleRemoveFromCart(item)}>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">₹{item.product.price}</p>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="number"
                                            className="w-12 p-1 border rounded text-gray-900"
                                            defaultValue={1}
                                            onChange={(e) => handleQuantityChange(e, item)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 border-t absolute left-0 w-full bottom-0 border-gray-200">
                <div className='w-full flex-shrink-0 items-center justify-between'>
                    <div>
                        <p className="text-sm px-3 text-gray-500">Subtotal</p>
                    </div>
                    <div className="mt-6">
                        <button type="button" className="w-full bg-black text-white py-2 text-center text-sm font-medium hover:bg-gray-800">
                            View Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default Cart
