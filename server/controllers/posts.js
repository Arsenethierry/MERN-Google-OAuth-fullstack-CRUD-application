import express from 'express';
import PostModel from '../models/postModel.js';
import mongoose from 'mongoose';

const router = express.Router();

export const getPosts = async(req,res)=>{
    try {
        const postData = await PostModel.find();

        res.status(200).send(postData);
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async(req,res) => {
    const post = req.body;

    const newPost = new PostModel(post);
    try {
        await newPost.save();

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export default router