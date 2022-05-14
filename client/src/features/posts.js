import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts : [],
    status: null
}
export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async()=>{
        try {
            const response = await axios.get("http://localhost:5000/posts");
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers:{
        [getPosts.pending]: (state,action)=>{
            state.status = "pending";
        },
        [getPosts.fulfilled]: (state,action)=>{
            state.status = "success";
            state.posts = action.payload;
          
        },
        [getPosts.rejected]: (state,action)=>{
            state.status = "rejected";
        },
    },
});

export default postsSlice.reducer;