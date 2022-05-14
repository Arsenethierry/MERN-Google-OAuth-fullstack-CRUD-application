import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://Arsene:Arsene2021@cluster0.9hfpx.mongodb.net/postsdb?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error)=> console.log(error));