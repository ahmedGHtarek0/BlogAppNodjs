import mongoose,{Schema,Document} from "mongoose";
interface IallUser extends Document{
    name:string,
    email:string,
    password:string
}
const SchemaofAlluser= new Schema<IallUser>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
export const Usermodel= mongoose.model<IallUser>('user',SchemaofAlluser)
export const Adminmodel= mongoose.model<IallUser>('admin',SchemaofAlluser)