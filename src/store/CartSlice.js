import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    CartProduct: null
}

const CartStore = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductsToCart: (state, action) => {
            // console.log(action.payload);
            state.CartProduct = action.payload
        },
        removeProductFromCart: (state, action) => {
            state.CartProduct = null
        }
    }
})

export const {addProductsToCart,removeProductFromCart} = CartStore.actions
export default CartStore.reducer