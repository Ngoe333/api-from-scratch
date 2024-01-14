import NextAuth  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from 'bcryptjs';
import dbConnect from '@/mongo/db.config.js';
import User from '@/models/user.js';

dbConnect();




const handler = NextAuth({
    
    pages: {
        signIn: '/sign-in',
    },

    secret: process.env.SECRET_KEY,

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "marketexpress@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const {email, password: any} = credentials;
                const existUser = await User.findOne({email})



                return null
                

                // Add logic here to look up the user from the credentials supplied



            }
        })
    ]
    
    
    
    });

  
   
    export {handler as GET, handler as Post};