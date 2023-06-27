import express from  'express';
import mongoose from 'mongoose';
import { postSignup, postLogin, deleteUser} from './controllers/User.js'

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000
async function connectToDB() {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL)
    if (connection) {
        console.log('connected to mongoDB');
    }
}
connectToDB();

app.post('/signup', postSignup)
app.post("/login",  postLogin)
app.delete('/user/:email',  deleteUser)


app.listen(PORT, () => {
    console.log(`Server started lisiting on ${PORT}`);
  })