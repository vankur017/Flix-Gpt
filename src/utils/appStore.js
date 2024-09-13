import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const appStore = configureStore({
    reducer:{
        users : userReducer
    }
})


export default appStore