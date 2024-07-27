import mongoose from "mongoose";
import {User} from '../../models/user'
export async function  POST(req){
    console.log("hello")
    const body= await req.json();
    mongoose.connect('mongodb+srv://food-delivery:sanchar127@cluster0.t1tfsqc.mongodb.net/food-delivery')
   const createdUser= await User.create(body)
    return Response.json(createdUser);
}