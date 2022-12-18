import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true},
    paasword:{type:String,required:true,trim:true},
    join:{type:Date,default:Date.now}
})
const UserModel=mongoose.model('user',userschema)
export default UserModel 