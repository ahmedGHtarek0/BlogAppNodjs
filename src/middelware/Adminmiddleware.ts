import { NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { Adminmodel } from "../models/userlogin&rgister";
export const Adminmiddlware=(req:any,res:any,next:NextFunction)=>{
    const authorization= req.get('authorization')
    if(!authorization){
        res.send('where is the autjorization man!')
        return
    }
    const token = authorization.split(' ')[1]
    if(!token){
        res.send('where is the token Bitch')
    }
    jwt.verify(token,'ADMINjwt',async(err:any,payload:any)=>{
        if(err){
            res.send('the token is not rigth Mr haker')
        }
        if(!payload){
            res.send('ensah Allah la2')
        }
        const Admin= await Adminmodel.findOne({email:payload.email})
        req.admin=Admin
        next()
    })
}