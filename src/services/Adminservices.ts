import { Filtermodel } from "../models/Filtermodels"
import { Postsmodel } from "../models/Postmodel"
import { Usermodel } from "../models/userlogin&rgister"

interface filter{
    adminId:string,
    nameoffilter:string,
}
export const Addfilter=async({adminId,nameoffilter}:filter)=>{
    const searchbaoutfilter= await Filtermodel.findOne({nameoffilter:nameoffilter})
    if(searchbaoutfilter){
        return('the filter is already exsit')

    }
    const addfilter= await Filtermodel.create({adminId:adminId,nameoffilter})
   await addfilter.save()
   return(addfilter)
}
interface deluser{
    id:string
}
export const dlusees=async({id}:deluser)=>{
    const searchaboutusers= await Usermodel.find({_id:id})
    if(!searchaboutusers){
        return('the user is not exsit')
    }
    const dletpostsofuser= await Postsmodel.deleteMany({userid:id})
    const deluser=await Usermodel.findOneAndDelete({_id:id})
    return('deleted')
}
/*
now we add filter and test it with there middleware 15:26(same day)
*/
