import mongoose,{Schema,Document} from "mongoose";
export interface Ipostcomments{
    useridforcomment?:string,
    comment:string
}
const shcmeofcoomnets= new Schema<Ipostcomments>({
    useridforcomment:{type:String ,required:true},
    comment:{type:String}
})
interface Iallpost extends Document{
    userid:string,
    discription:string,
    image:string,
    comments:Ipostcomments[],
    like:number,
    filter:string
}
const schmeofallppst= new Schema<Iallpost>({
    userid:{type:String,required:true},
    discription:{type:String,default:''},
    image:{type:String,default:'anyimage'},
    comments:[shcmeofcoomnets],
    like:{type:Number,default:0},
    filter:{type:String,required:true}
})
export const Postsmodel= mongoose.model<Iallpost>('Posts',schmeofallppst)