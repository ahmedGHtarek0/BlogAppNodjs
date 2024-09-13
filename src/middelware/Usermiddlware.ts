import { NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { Usermodel } from "../models/userlogin&rgister";
export const usermidllware=(req:any,res:any,next:NextFunction)=>{
    const authorization= req.get('authorization')
    if(!authorization){
        res.send('where is the autjorization man!')
        return
    }
    const token = authorization.split(' ')[1]
    if(!token){
        res.send('where is the token Bitch')
    }
    jwt.verify(token,'USERjwt',async(err:any,payload:any)=>{
        if(err){
            res.send('the token is not rigth Mr haker')
        }
        if(!payload){
            res.send('ensah Allah la2')
        }
        const user= await Usermodel.findOne({email:payload.email})
        req.user=user
        next()
    })
}