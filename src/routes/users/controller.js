const express= require('express');
const router = express.Router();
const User = require('../../models/User');
const verifyToken = require('../../database/users/verifyToken');
const auth = require('../../database/users/authController');
const database = require('../../database/controller');

router.post('/signup',async (req,res) =>{
    const dbResponse = await database.newUser(req.body)
    message = dbResponse[0];
    if(!message.error){
        user = dbResponse[1];
        token = await auth.newToken(user);
        console.log("New user added "+ user.username);
        
        res.status(200).json({message,token: token});
    }else{
        res.status(400).json({message});
    }
   
}) 

router.get('/me',verifyToken, async (req,res) =>{
    const user = await User.findById(req.userId,{password : 0});
    if (!user) {
        return res.status(404).send('No user found');
    }else{
        res.status(200).json(user);
    }
    res.status(404).json(req.decoded);
  
} )
router.post('/signin',async (req,res) =>{
    const {email, password} = req.body;
    const user = await database.findUser(email);
    if (!user) {
        return res.status(404).json({"error" :true, "description" : "user no exists"});
    }else{
        if (await database.validatePassword(user,password)) {
            const token = await auth.newToken(user);
            return res.status(200).json({"error" :false, "description" : "logged",token});
        }else{
            return res.status(400).json({"error" :true, "description" : "wrong password"});
        }
    }
    
})
module.exports = router;