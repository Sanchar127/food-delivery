import mongoose from "mongoose";
import {User} from '../../models/user'
export async function  POST(req){
    console.log("hello")
    const body= await req.json();
    mongoose.connect(MONGO_URL)
   const createdUser= await User.create(body)
    return Response.json(createdUser);
}