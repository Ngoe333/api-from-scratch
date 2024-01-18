import dbConnect from '@/mongo/db.config.js';
import User from '@/models/user.js';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
dbConnect();


  

export async function POST (req) {
    try {

        const resBody = await req.json();
        const {username, email, password} = resBody;

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



