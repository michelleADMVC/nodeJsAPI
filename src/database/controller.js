const mongoose = require('mongoose');
const Coctel = require('../models/Coctel');
const Ingre = require ('../models/Ingredient');
const Glass = require('../models/Glass');
const Step  = require('../models/Step');
const Tool  = require('../models/Tool');

module.exports={
    find: async () => {
        let res = await mongoose;
        console.log(res);
        return res;
    },
    getCoctels: async () => {
        let res = await Coctel.find();
        console.log(res);
        return res;
    },
    getTools : async () => {
        let res = await Tool.find();
        console.log(res);
        return res;
    },
    getGlasses : async () => {
        let res = await Glass.find();
        console.log(res);
        return res;
    },
    getSteps : async () => {
        let res = await Step.find();
        console.log(res);
        return res;
    },
    getIngredients : async () => {
        let res = await Ingre.find();
        console.log(res);
        return res;
    },
    addCoctel: async (input) => {
        let res;
        let newCoctel = new Coctel(input);
        await newCoctel.save((err,document)=>{
            if(err){
                console.log(err);
                res = true;
            }else{
                console.log(document);
                res= false;
            }
        });
        return res;
    },
    addIngredient : async (input) => {
        let res;
        let newIngre = new Ingre(input);
        await newIngre.save((err,document)=>{
            if(err){
                console.log(err);
                res = true;
            }else{
                console.log(document);
                res= false;
            }
        });
        return res;
    },
    addTool : async (input) => {
        let res;
        let newTool = new Tool(input);
        await newTool.save((err,document)=>{
            if(err){
                console.log(err);
                res = true;
            }else{
                console.log(document);
                res = false;
            }
        });
        return res;
    },
    addGlass : async (input) => {
        let res;
        let newGlass = new Glass(input);
        await newGlass.save((err,document)=>{
            if(err){
                console.log(err);
                res = true;
            }else{
                console.log(document);
                res = false;
            }
        });
        return res;
    },
    removeTool: async (input) => {
        let res;
        await Tool.deleteOne(input,function (err, doc) {
            if (err) {
                console.log(err);
            }
            if (doc.deletedCount > 0) {
                console.log("Se eliminado un elemento");
                res = false;
            }else{
                console.log("El elemento no se encuentra en la base datos");
                res= true;
            }            
        });
        return res;
    },
    removeIngredient: async (input) => {
        let res;
        await Ingre.deleteOne(input,function (err, doc) {
            if (err) {
                console.log(err);
            }
            if (doc.deletedCount > 0) {
                console.log("Se eliminado un elemento");
                res = false;
            }else{
                console.log("El elemento no se encuentra en la base datos");
                res= true;
            }            
        });
        return res;
    },
    removeGlass : async (input) => {
        let res;
        await Glass.deleteOne(input,function (err, doc) {
            if (err) {
                console.log(err);
            }
            if (doc.deletedCount > 0) {
                console.log("Se eliminado un elemento");
                res = false;
            }else{
                console.log("El elemento no se encuentra en la base datos");
                res= true;
            }            
        });
        return res;
    },
    removeCoctel: async (input) => {
        let res;
        await Coctel.deleteOne(input,function (err, doc) {
            if (err) {
                console.log(err);
            }
            if (doc.deletedCount > 0) {
                console.log("Se eliminado un elemento");
                res = false;
            }else{
                console.log("El elemento no se encuentra en la base datos");
                res= true;
            }            
        });
        return res;
    }
}