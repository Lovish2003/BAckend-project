import express from 'express'
import { usercontroller } from '../controllers/usercontroller.js';
const router=express.Router();
router.get('/',usercontroller.home)
router.get('/register',usercontroller.register)
router.post('/register',usercontroller.createUserDoc)
router.get('/login',usercontroller.login)
router.post('/login',usercontroller.verifyLogin)
export default router