import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    userData: null,
    // isLoggedIn: false
}

const loginDetails = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    
    try {
        const { username, password } = credentials;
        const userLogin = await axios.post("http://localhost:8080/api/v1/users/login", {
            'username': String(username),
            'password': String(password)
        }, {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        },)

        
        return userLogin.data.data
    } catch (error) {
        console.log(error);
    }

})

const refreshToken = createAsyncThunk("auth/refreshToken",(_,thunkApi)=>{
    try {
       const refresh =  axios.post("http://localhost:8080/api/v1/users/refresh-token",
            {
                headers:{
                    "Content-Type":"application/json",
                }
            }
        )

        console.log(refresh);

        return refresh.data
    } catch (error) {
        console.log(error);        
    }
})

export const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout:(state)=>{
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            state.isLoggedIn = false;
            state.userData = null
        },

        currentUser: (state,action)=>{
            // console.log(action.payload);
            state.userData = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginDetails.pending, (state, action) => {
                state.isLoggedIn = true
            })
            .addCase(
                loginDetails.fulfilled, (state, action) => {
                    console.log(action.payload);
                    localStorage.setItem("accessToken",action.payload.accessToken)
                    localStorage.setItem("refreshToken",action.payload.refreshToken)
                    localStorage.setItem("user",JSON.stringify(action.payload.user))
                    state.isLoggedIn = false
                    state.userData = action.payload
                }
            )
            .addCase(
                loginDetails.rejected, (state, action) => {
                    state.isLoggedIn = false
                }
            )
    }

})

export const { logout, currentUser } = authStore.actions
export { loginDetails,refreshToken }
export default authStore.reducer