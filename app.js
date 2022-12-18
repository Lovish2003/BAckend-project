import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import web from './routes/web.js'
const app=express()
const port=process.env.PORT || '5000'
const DATABASE_URL=process.env.DATABASE_URL ||"mongodb://127.0.0.1/blogdb"
app.use( bodyParser.urlencoded( {extended: true} ) )
mongoose.connect(DATABASE_URL)
.then(()=>{
    console.log('Connnected successfully');
})
.catch(err=>console.log(err))
app.set('view engine','ejs')
app.use('/',web)
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})
export default app;