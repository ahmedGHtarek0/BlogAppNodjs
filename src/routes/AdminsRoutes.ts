import expres from 'express'
import { Adminmiddlware } from '../middelware/Adminmiddleware'
import { Addfilter, dlusees } from '../services/Adminservices'
const route= expres.Router()
route.post('/addfilter',Adminmiddlware,async(req:any,res)=>{
    const adminId=req.admin._id
    const {nameoffilter}=req.body
    const addfilter= await Addfilter({adminId,nameoffilter})
    res.status(200).send(addfilter)
})
route.delete('/deleteusers/:id',Adminmiddlware,async(req:any,res)=>{
    const {id}= req.params
    console.log(id)
    const deluser= await dlusees({id})
    res.status(200).send(deluser)
   
})
export default route