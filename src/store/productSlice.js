import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products: []
}

export const productStore = createSlice({
    name: 'product',
    initialState,

    reducers:{
        allProducts: (state,action)=>{
            state.products= action.payload
        }
    }
})

export const {allProducts} = productStore.actions

export default productStore.reducer