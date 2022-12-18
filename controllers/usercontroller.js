import express from "express"
import bcrypt from 'bcrypt'
import UserModel from "../models/user.js"
class usercontroller{
    static home=(req,res)=>{
        res.render('index')
    }
    static createUserDoc=async(req,res)=>{
        const {name,email,paasword}=req.body
        const hashpaasword=await bcrypt.hash(req.body.paasword,10)
        try {
            const result=await UserModel.findOne({email:email})
            if(result!=null){
                res.send("This User already registered")
            }else{
                const doc=new UserModel({
                    name:name,
                    email:email,
                    paasword:hashpaasword
                })
                await doc.save()
                res.redirect('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }
    static register=(req,res)=>{
        res.render('registration')
    }
    static login=(req,res)=>{
        res.render('login')
    }
    static verifyLogin=async(req,res)=>{
        try {
            const{email,paasword}=req.body
            const result=await UserModel.findOne({email:email})
            if(result!=null){
                const ismatch=await bcrypt.compare(paasword,result.paasword)
                if(result.email==email && ismatch){
                    res.redirect('/')
                }else{
                    res.send('<h1>Email or password is not matching...</h1>')
                }
            }else{
                res.send("<h1>This email is not registered...</h1>")
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export {usercontroller}