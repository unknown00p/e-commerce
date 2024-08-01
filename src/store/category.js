import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: null
}

const categoryStore = createSlice({
    name: 'category',
    initialState,
    reducers: {
        category: (state,action)=>{
            state.category = action.payload
        }
    }
})

export const {category} = categoryStore.actions

export default categoryStore.reducer