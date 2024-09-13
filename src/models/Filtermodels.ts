import mongoose,{Schema,Document} from "mongoose";
interface Ifilter extends Document{
    adminId:string,
    nameoffilter:string
}
const filterscmea= new Schema<Ifilter>({
    adminId:{type:String,required:true},
    nameoffilter:{type:String,required:true}
})
export const Filtermodel= mongoose.model<Ifilter>('Filter',filterscmea)