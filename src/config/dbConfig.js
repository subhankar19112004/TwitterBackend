import mongoose from 'mongoose';
import { MONGO_URL } from './serverConfig.js';

export default async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connection to db successful");
        
    } catch (error) {
        console.log("failed to connect to db");
        console.log(error);
    }
}