import express from 'express'
import { usermidllware } from '../middelware/Usermiddlware'
import { addCommnets, addpostTS, deeltcomments, deleteS, updatecomments, updatelike, updatelikesub, updatepost } from '../services/Userservice'
const route=express.Router()
route.post('/addpost',usermidllware,async(req:any,res)=>{
   const userid= req.user._id
   const {discription,filter}=req.body
   const addposts= await addpostTS({userid,discription,filter})
   res.status(200).send(addposts) 
})
route.delete('/deletepost/:id',usermidllware,async(req:any,res)=>{
    const userid= req.user._id
    const {id}=req.params
    const deletes= await deleteS({userid,id})
    res.status(200).send(deletes)
})
route.put('/updatepost/:id',usermidllware,async(req:any,res)=>{
    const userid= req.user._id
    const {id}=req.params
    const {discription,filter}=req.body
    const deletes= await updatepost({userid,id,discription,filter})
    res.status(200).send(deletes)
})
route.post('/addcomment/:id',usermidllware,async(req:any,res)=>{
    const userid=req.user._id
    const {id}=req.params
    const {comment}=req.body
    const addcoment=await addCommnets({userid,id,comment})
    res.status(200).send(addcoment)
})
route.delete('/deletecomment/:idpost/:idcomment',usermidllware,async(req:any,res)=>{
    const userid=req.user._id
    const idpost=req.params.idpost
    const idcomment=req.params.idcomment
    // console.log(idpost,idcomment)
    const deletecom= await deeltcomments({idpost,idcomment,userid})
    res.status(200).send(deletecom)
})
route.put('/update/:idpost/:idcomment',usermidllware,async(req:any,res)=>{
    const userid=req.user._id
    const idpost=req.params.idpost
    const idcomment=req.params.idcomment
    const {comment}=req.body
    // console.log(idpost,idcomment)
    const Upd= await updatecomments({comment,idpost,idcomment,userid})
    res.status(200).send(Upd)
})
route.post('/addlike/:idpost',usermidllware,async(req:any,res)=>{
    const idpost=req.params.idpost
    const Updlike= await updatelike({idpost})
    res.status(200).send(Updlike)
})
route.post('/deletelike/:idpost',usermidllware,async(req:any,res)=>{
    const idpost=req.params.idpost
    const Updlike= await updatelikesub({idpost})
    res.status(200).send(Updlike)
})

export default route
