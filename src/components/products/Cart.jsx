import React, { useEffect, useState } from 'react'
import { getUserCart } from '../../FetchFunc/fetchEcommerceApi';

function Cart() {
    const [cartItems, setCartItems] = useState(null)
    useEffect(() => {
        async function cartFunc(params) {
            const userCart = await getUserCart()
            setCartItems("")
        }


        cartFunc()
    }, [setCartItems])

    // console.log(cartItems);

    return (
        <div className="px-4 py-6 flex flex-col justify-between">
            <div className="flow-root">
                <ul className="-my-8 max-h-56 overflow-y-auto">
                    {cartItems && cartItems.map((item, index) => (
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

            <div className="mt-6 border-t bottom-3 absolute border-gray-200 pt-6">
                <div className='w-full flex flex-shrink-0 items-center justify-between'>
                    <div>
                        <p className="text-sm text-gray-500">Subtotal</p>
                    </div>
                    <div className="mt-6">
                        <button type="button" className="w-full bg-black text-white py-2 rounded-md text-center text-sm font-medium hover:bg-gray-800">
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
