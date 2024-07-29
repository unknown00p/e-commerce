import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axiosInstance from './axiosInstences'
import axios from 'axios'
import Cookies from "js-cookie"

const initialState = {
    renderToken: Cookies.get("Token") || null,
    isLoggedIn: false,
    currentUserData: null
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
        return thunkApi.rejectWithValue(error.response.data);
    }

})

const refreshToken = createAsyncThunk("auth/refreshToken", (_, thunkApi) => {
    try {
        const response = axios.post("http://localhost:8080/api/v1/users/refresh-token",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        console.log(refresh);

        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
})

export const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.renderToken = null
            state.isLoggedIn = false
        },
        currentUserData: (state, action) => {
            state.currentUserData = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginDetails.pending, (state, action) => {
                state.isLoggedIn = true
            })
            .addCase(
                loginDetails.fulfilled, (state, action) => {
                    Cookies.set("Token","bwtGhOyQu9jmgbc9K6U9iZLSWvwrFftQ6mfYJY04SGPrRToQFzrDyhFVRl5gd7aQJ3L",{expires:1})
                    state.isLoggedIn = false
                    state.renderToken = action.payload.user
                }
            )
            .addCase(
                loginDetails.rejected, (state, action) => {
                    state.isLoggedIn = false
                }
            )
            .addCase(refreshToken.fulfilled, (state, action) => {
                // Handle successful token refresh if needed
                console.log('Token refreshed successfully', action.payload);
            })
            .addCase(refreshToken.rejected, (state) => {
                // Handle token refresh failure
                console.log('Token refresh failed');
                state.isLoggedIn = false;
            });
    }

})

export const { logout, currentUserData } = authStore.actions
export { loginDetails,refreshToken }
export default authStore.reducer