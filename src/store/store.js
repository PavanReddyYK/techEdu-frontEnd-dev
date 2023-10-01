import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./slice"

export const userStore = configureStore({
    reducer :{
        user :userReducer,
    }
})
