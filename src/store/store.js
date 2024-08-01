import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";
import productReducer from "./productSlice"
import cartReducer from './CartSlice'
import categoryReducer from "./category";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer,
        category: categoryReducer
    }
})

