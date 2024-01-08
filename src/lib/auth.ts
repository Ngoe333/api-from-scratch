import { NextAuthOptions,  } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import dbConnect from '@/mongo/db.config.js';
import User from '@/models/user.js';


export const authOptions: NextAuthOptions = {

  pages:{
    signIn: '/sign-in',
  },

    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "marketexpress@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password){
              return null;
            }

            await dbConnect();
            const existingUser = await User.findOne({email: credentials?.email});

            if(!existingUser){
              return null;
            }

            const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password)
            if(!passwordMatch){
              return null;
            }

            return {
              id: `${existingUser.id}`,
              username: existingUser.username,
              password: existingUser.password
            }

            // Add logic here to look up the user from the credentials supplied
           
      
            
          }
        })
      ]
      
}