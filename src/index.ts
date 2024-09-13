import express from 'express'
import mongoose  from 'mongoose'
import loginandregister from './routes/loginandregister';
import AdminsRoutes from './routes/AdminsRoutes';
import Userrouters from './routes/Userrouters';
const app=express()
const port =3000;
mongoose
.connect("mongodb://localhost:27017/BlogApp")
.then(()=> console.log("MongoDB connected !"))
.catch((err)=>console.log("faild to connect cause ", err))
app.use(express.json())//middleware built in express who cjange the json in the req and but in the req.body
app.use('/auth',loginandregister)
app.use('/Admin',AdminsRoutes)
app.use('/Post',Userrouters)
app.listen(port,()=>{
    console.log(`srever is ruunig at http://localhost:${port}`)
})