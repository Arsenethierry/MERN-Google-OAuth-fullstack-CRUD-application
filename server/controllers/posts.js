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

export const updatePost = async(req,res)=>{
    const post = req.body;
    console.log(post.title)
    const { id : _id } = req.params;
    

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no valid id");



    const updatedPost = await PostModel.findByIdAndUpdate(_id, {...post, _id }, { new: true });

    res.json(updatedPost);
}
export const deletePost = async(req,res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post with id: ${id}`)

    await PostModel.findByIdAndRemove(id);

    res.json({ message: "post deleted successfully"})
}


export default router