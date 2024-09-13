import { Filtermodel } from "../models/Filtermodels"
import { Ipostcomments, Postsmodel } from "../models/Postmodel"

interface apposta{
    userid:string,
    filter:string,
    discription:string,
}
export const addpostTS=async({userid,filter,discription}:apposta)=>{
const searchaboutfilter =await Filtermodel.findOne({nameoffilter:filter})
if(!searchaboutfilter){
    return('the filter isnot init')
}
const addpost= await Postsmodel.create({userid,discription,filter})
await addpost.save()
return(addpost)
}
interface dlete{
    id:string,
    userid:string,
    discription?:string,
    filter?:string
}
export const deleteS=async({id,userid}:dlete)=>{
    const searchaboutuserpost= await Postsmodel.findOne({userid:userid})
    if(!searchaboutuserpost){
        return('u canot delete this post ')
    }
    const dleey= await Postsmodel.findOneAndDelete({_id:id})
    return('Done man and deleted')
}
export const updatepost=async({id,userid,discription,filter}:dlete)=>{
    const searchaboutuserpost= await Postsmodel.findOne({userid:userid})
    if(!searchaboutuserpost){
        return('u canot update this post ')
    }
    const searchaboutfilter =await Filtermodel.findOne({nameoffilter:filter})
if(!searchaboutfilter){
    return('the filter isnot init')
}
    const dleey:any= await Postsmodel.findOneAndUpdate({_id:id},{$set:{filter:filter,discription:discription}})
    return("udpated")
}
interface addcom{
    userid:string,
    id:string,
    comment:string
}
export const addCommnets=async({userid,id,comment}:addcom)=>{
    const searchaboutuserpost= await Postsmodel.findOne({_id:id})
    if(!searchaboutuserpost){
        return('the post was deleted')
    }
    searchaboutuserpost?.comments.push({useridforcomment:userid,comment:comment})
    await searchaboutuserpost?.save()
    return(searchaboutuserpost)
}
interface dlecom{
    comment?:string,
    idpost:string,
    idcomment:string,
    userid:string
}
export const deeltcomments=async({idpost,idcomment,userid}:dlecom)=>{
    const searchaboutuserposts:any= await Postsmodel.findOne({_id:idpost})
if(!searchaboutuserposts){
    return('the post was nothere')
}
const searchaboutuserpost=await Postsmodel.findOne({_id:idpost,userid:userid})
if(searchaboutuserpost){
    const dlecome= searchaboutuserpost.comments.filter((p:any)=>{
        return(p._id.toString()!==idcomment)
    })
    searchaboutuserpost.comments=dlecome
  await searchaboutuserpost.save()
  return(searchaboutuserpost)
}
for(const p of searchaboutuserposts.comments){
    if(p._id.toString()===idcomment&&p.useridforcomment===userid.toString()){
        const dlecome:any= searchaboutuserposts.comments.filter((p:any)=>{
            return(p._id.toString()!==idcomment)
        })
        searchaboutuserposts.comments=dlecome
        await searchaboutuserposts.save()
        return(searchaboutuserposts)
    }
}
return('u cant deleted this commnets')
}
export const updatecomments=async({comment,idpost,idcomment,userid}:dlecom)=>{
    const searchaboutuserposts:any= await Postsmodel.findOne({_id:idpost})
if(!searchaboutuserposts){
    return('the post was nothere')
}
const updcom:any[]=[]
for(const p of searchaboutuserposts.comments){
    if(p._id.toString()===idcomment&&p.useridforcomment===userid.toString()){
        p.comment=comment
        await searchaboutuserposts.save()
        return(searchaboutuserposts)
    }
}
return('u cant update this commnets')
}
interface addlikee{
    idpost:string
}
export const updatelike=async({idpost}:addlikee)=>{
    const searchaboutuserposts:any= await Postsmodel.findOne({_id:idpost})
    if(!searchaboutuserposts){
        return('the post was nothere')
    }
    searchaboutuserposts.like+=1
   await searchaboutuserposts.save()
   return(searchaboutuserposts)
}
export const updatelikesub=async({idpost}:addlikee)=>{
    const searchaboutuserposts:any= await Postsmodel.findOne({_id:idpost})
    if(!searchaboutuserposts){
        return('the post was nothere')
    }
    searchaboutuserposts.like-=1
   await searchaboutuserposts.save()
   return(searchaboutuserposts)
}

