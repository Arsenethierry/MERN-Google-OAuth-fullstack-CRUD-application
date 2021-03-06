import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async(id,post)=>{
       try {
        const { data } = await api.updatePost(id,post);

        return data
       } catch (error) {
           console.log(error)
       } 
    }
)

export const likePost = createAsyncThunk(
    "posts/likePost",
    async(id)=>{
        try {
            const { data } = await api.likePost(id);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async(id)=>{
        try {
            const response = await api.deletePost(id);
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
        [updatePost.fulfilled]: (state,action)=>{
            state.status = "success";
            const updatedPost = state.posts.map((post)=>(post._id === action.payload._id ? action.payload:post));
            state.posts = updatedPost;
        },
        
        [getPosts.pending]: (state)=>{
            state.status = "pending";
        },
        [getPosts.fulfilled]: (state,action)=>{
            state.status = "success";
            state.posts = action.payload;
          
        },
        [getPosts.rejected]: (state)=>{
            state.status = "rejected";
        },
        [createPost.fulfilled]: (state,action)=>{
            state.push(action.payload);
        },
        [deletePost.fulfilled]: (state,action)=>{
            const currentPosts = state.posts.filter((post)=> post._id !== action.payload._id);
            return{
                ...state,
                posts: currentPosts,
                status: "success"
                
            }
        },
        [likePost.fulfilled]:(state,action)=>{
            const liked = state.posts.map((post)=>
            (post._id === action.payload._id ? action.payload : post));
            return{
                ...state,
                posts: liked,
                status: "success"
            }
        }
    },
});

export default postsSlice.reducer;