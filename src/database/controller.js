const Coctel = require('../models/Coctel');
const Ingre = require ('../models/Ingredient');
const Glass = require('../models/Glass');
const Step  = require('../models/Step');
const Tool  = require('../models/Tool');

module.exports={
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
    addCoctel: async () => {
        const newCoctel = new Coctel({
            name:'Ronsito',
            description: 'Sta rico rico',
            views : 0,
        });
        console.log("Coctel de test creado");
        await newCoctel.save((err,document)=>{
            if(err){
                console.log(err);
            }
            console.log(document);
            
        });
    },
    addIngredient : async (input) => {
        let newIngre = new Ingre(input);
        await newIngre.save((err,document)=>{
            if(err){
                console.log(err);
            }        
        });
    }
}