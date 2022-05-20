import { createSlice, createAsyncThunk, applyMiddleware } from "@reduxjs/toolkit";
import * as api from '../api/index.js'

const initialState = {
    posts : [],
    status: null
}
export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async()=>{
        try {
            const response = await api.fetchPosts()
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)
export const createPost = createAsyncThunk(
    "posts/createPosts",
    async(post)=>{
        try {
           const response = await api.createPost(post)
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
        [createPost.fulfilled]: (state,action)=>{
            state.push(action.payload);
        }
    },
});

export default postsSlice.reducer;