const mongoose = require('mongoose');
const Coctel = require('../models/Coctel');
const Ingre = require ('../models/Ingredient');
const Glass = require('../models/Glass');
const Step  = require('../models/Step');
const Tool  = require('../models/Tool');
const User = require('../models/User');

function selectCollection(collection){
    let schema;
    switch (collection) {
        case "cocktails":
            schema = Coctel;
        break;
        case "ingredients":
            schema = Ingre;
        break;
        case "glasses":
            schema = Glass;
        break;
        case "tools":
            schema = Tool;
         break;
    }
    return schema;
};
async function emailExists(email){
    let res;
    user = await User.findOne({email:email});  

    if (user) {
        res = true;
    }else{
        res = false;
    }
    return res;
}
module.exports={
    find: async () => {
        let res = await mongoose;
        console.log(res);
        return res;
    },
    getCollection: async (collection) => {
        let res;
        schema = selectCollection(collection);
        data = await schema.find();
        res = [{"error":false, "description" :"all ok","objects finded :":data.length}]
        res.push(data);
        return res;
    },
    addObject: async (input,collection) => {
         let res = {"error":false,"description": input.name_en+" added"};
        try{
        schema = selectCollection(collection);
        let newObject = new schema(input);
            await newObject.save((err,document)=>{
                if(err){
                    console.log(err);
                    res = {"error":true,"description":"not valid data"};
                }
            });
            return res;
        }catch(e){
            if (e) {
               return {"error":true,"description":"fatal error"};
            }
        }
    },
    removeObject: async (input,collection) => {
        let res; 
        try{
        schema = selectCollection(collection);
        await schema.deleteOne(input,function (err, doc) {
            if (err) {
                console.log(err);
            }else{
                if (doc.deletedCount > 0) {
                    console.log("deleted");
                    
                    res = {"error":false, "description" :"object deleted"};
                }else{
                    res = {"error":true, "description" :"not finded"};
                }
            }            
        });
        return res;
        }catch(e){
            if(e){
                return {"error":true, "description" :"invalid ID"};
            }   
        }
    },
    getObjectByID: async (input,collection) => {
        let res;
        try{
            schema = selectCollection(collection);
            await schema.findById(input,function (err, doc) {
            if (err) {
                console.log(err);
            }else{
                console.log(doc);
                if (doc) {
                res = [{"error":false, "description" :"all ok"}]
                res.push(doc);          
                }else{
                res = [{"error":true, "description" :"not finded"}]
                }
            }
        });
        return res;
        }catch(e){
            if(e){
                return [{"error":true, "description" :"Invalid ID"}];
            }       
        }   
    },
    collectionValidator: async (params) => {
        let collections =["cocktails","ingredients","tools","glasses"]
        let exists = false;
        for (let i = 0; i < collections.length; i++) {
            if(params == collections[i]){
                exists = true;
            }
        };
        return exists;
    },
    findUser : async (email) =>{
        return user = await User.findOne({email: email});  
    },
    validatePassword : async (user,password)=>{
        const isValid = await user.validatePassword(password);
        if (isValid) {
            return true;
        }else{
            return false;
        }
    },
    newUser:async(data) =>{
        var res = [];
        const {username,email,password} = data;
        console.log(await emailExists(email));
        
        if(username && email && password){
            if(!await emailExists(email)){
            const user = new User(data);
            res.push({"error":false, "description" :"register success"});
                user.password = await user.encryptPassword(user.password);
                await user.save((err,document)=>{
                    if(err){
                        console.log(err);
                    }
                });
                res.push(user);
            }else{
            res.push({"error":true, "description" :"this email already exists"});
            }
        }else{
            res.push({"error":true, "description" :"not valid data"});
        }
         return res;
    },
    getObjectByName: async (name,collection) =>{
        let res;
        try{
            schema = selectCollection(collection);
        await schema.find({"name_en":name},function (err, doc) {
            if (err) {
                console.log(err);
            }else{
                console.log(doc);
                if (doc) {
                    if(doc.length <1){
                        res = [{"error":true, "description" :"not finded"}];
                    }else{
                        res = [{"error":false, "description" :"all ok","objects finded :":doc.length}]
                        res.push(doc);  
                    }        
                }else{
                    res = [{"error":true, "description" :"not finded"}]
                }
            }
        });
        return res;
        }catch(e){
            if(e){
                return [{"error":true, "description" :"Invalid Name"}];
            }       
        }   
    }
}