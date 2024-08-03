import mongoose from "mongoose";
import NextAuth from "next-auth"
import {User} from '../../../models/user'
import CredentialsProvider from "next-auth/providers/credentials"
const bcrypt = require('bcryptjs');
const handler = NextAuth({
  secret:process.env.SECRET,
    providers: [
        CredentialsProvider({
         
          name: 'Credentials',
          id:'credentials',
       
          credentials: {
            username: { label: "Email", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
           
          const email=credentials?.email;
          const password=credentials?.password;
           mongoose.connect('mongodb+srv://food-delivery:sanchar127@cluster0.t1tfsqc.mongodb.net/food-delivery')

           const user = await User.findOne({ email });
           const passwordOK = user && bcrypt.compareSync(password, user.password);
           console.log('hello');
           console.log({passwordOK});
            if(passwordOK){
              return user
            }
            // If no error and we have user data, return it
           
            // Return null if user data could not be retrieved
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }