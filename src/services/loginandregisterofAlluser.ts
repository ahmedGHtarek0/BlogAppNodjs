import { Adminmodel, Usermodel } from "../models/userlogin&rgister"
import jwt from 'jsonwebtoken'
interface registeralluser{
    name:string,
    email:string,
    password:string
}
export const Registeruser=async({name,email,password}:registeralluser)=>{
    const searchbaoutuser= await Usermodel.findOne({email:email})
    if(searchbaoutuser){
        return{data:'user is already exsit', statusecode:400}
    }
    const adduser=await Usermodel.create({name,email,password})
    await adduser.save()
    return({data:generateJwtuser({name,email,password}),statusecode:200})
}
export const RegisterAdmin=async({name,email,password}:registeralluser)=>{
    const searchbaoutAdmin= await Adminmodel.findOne({email:email})
    if(searchbaoutAdmin){
        return{data:'user is already exsit', statusecode:400}
    }
    const addAdmin=await Adminmodel.create({name,email,password})
    await addAdmin.save()
    return({data:generateJwtadmin({name,email,password}),statusecode:200})
}
interface loginalluser{
    email:string,
    password:string
}
export const Loginalluser=async({email,password}:loginalluser)=>{
    const searchbaoutuser:any= await Usermodel.findOne({email:email,password:password})
    if(searchbaoutuser){
        return{data:generateJwtuser({name:searchbaoutuser.name,email,password}), statusecode:200}
    }
    const addAdmin:any= await Adminmodel.findOne({email:email,password:password})
    if(addAdmin){
        return{data:generateJwtadmin({name:addAdmin.name,email,password}), statusecode:200}
    }
    else{
        return {data:'go sign Up fisrt' ,statusecode:400 }
    }
}
const generateJwtuser=(data:any)=>{
    return jwt.sign(data,'USERjwt')
}
const generateJwtadmin=(data:any)=>{
    return jwt.sign(data,'ADMINjwt')
}
/*
now we testing the auth in 14:46(12/09)
now we testing the authoruzation in Adminmiddlware 15:00(same Day)
*/
