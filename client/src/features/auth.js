import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        auth: (state,action)=>{
            localStorage.setItem('profile', JSON.stringify({ ...action.payload?.data }))
            state.auth = { authData: action.payload?.data};
        },
        logout: (state)=>{
            localStorage.clear();
            state.auth = { authData: null};
        }
    }
})

export default authSlice.reducer;
export const { auth,logout } = authSlice.actions