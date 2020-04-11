const Coctel = require('../models/Coctel');
const Ingre = require ('../models/Ingredient');

const showCoctels = async () => {
    let res = await Coctel.find();
    console.log(res);
    
    return res;
  };
const saveCoctel= async () => {
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
}
const saveIngredient = async (input) => {
    console.log("Peticion de guardar ingrediente recibida");
    console.log(input);
    let newIngre = new Ingre(input);
    await newIngre.save((err,document)=>{
        if(err){
            console.log(err);
        }
        console.log(document);
        
    });
}
exports.saveIngredient = saveIngredient;
exports.showCoctels = showCoctels;
exports.saveCoctel = saveCoctel;
  