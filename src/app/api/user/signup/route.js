import dbConnect from '@/mongo/db.config.js';
import User from '@/models/user.js';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import * as z from 'zod';
dbConnect();

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    
  })
  

export async function POST (req) {
    try {

        const resBody = await req.json();
        const {username, email, password} = userSchema.parse(resBody);

        // ---- Check if user already existe -----
        const userExiste = await User.findOne({email})

        if(userExiste) {

            return NextResponse.json({error: 'Email already exists'})
            
         
        }

        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(password, salt)


       

        const newUser = new User({
            username,
            email,
            password: hashpassword,
        })

        const userSave = await newUser.save()

        return NextResponse.json({
            message: 'User Create successfully',
            success:true,
            userSave
           
        }, {status:(201)})
        
    } catch (error) {
        return NextResponse.json({error: error.message},
            {status:(500)})
        

        
    }

}

