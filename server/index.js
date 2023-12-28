import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import postRoutes from './routes/posts.js'

const app = express();


app.use(express.json())
// app.use(bodyParser.json({limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.URL_CONNECTION
const PORT = process.env.PORT || 5000;

if (!CONNECTION_URL) {
    console.error('Please provide a valid connection URL in the environment variable URL_CONNECTION.');
    process.exit(1); 
  }

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));