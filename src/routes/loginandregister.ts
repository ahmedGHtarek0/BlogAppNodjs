import express from 'express'
import { Loginalluser, RegisterAdmin, Registeruser } from '../services/loginandregisterofAlluser'
import { Adminmiddlware } from '../middelware/Adminmiddleware'
const route= express.Router()
route.post('/registerAdmin',Adminmiddlware,async(req,res)=>{
    const {name,email,password}=req.body
    const {data,statusecode}=await RegisterAdmin({name,email,password})
    res.status(statusecode).send(data)
})
route.post('/registerUser',async(req,res)=>{
    const {name,email,password}=req.body
    const {data,statusecode}=await Registeruser({name,email,password})
    res.status(statusecode).send(data)
})
route.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const {data,statusecode}=await Loginalluser({email,password})
    res.status(statusecode).send(data)
})

export default route