import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggle : false,
}

 const userSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
        toggleAction: (state, {payload})=>{
            state.toggle=  (!state.toggle)
        }
    }
})

export const {toggleAction} = userSlice.actions
export default userSlice.reducer