const express= require('express');
const router = express.Router();
const database = require('../../database/controller');
router.post('/resources/add/ing',(req,res) =>{
    if(ingredientComplete(req)){
        database.addIngredient(req.body);
        res.send("success");  
    }else{
        res.send("Datos incompletos");
    }
})
router.post('/resources/add/glass',(req,res) =>{
    if(req.body){
        database.addGlass(req.body);
        res.send("success");  
    }else{
        res.send("Datos incompletos");  
    }
})
router.post('/resources/add/step',(req,res) =>{
    if(req.body){
        database.addStep(req.body);
        res.send("success");  
    }else{
        res.send("Datos incompletos");  
    }
})
function ingredientComplete(req){
if (req.body.name &&req.body.model && req.body.type && req.body.color && req.body.description) {
    return true;
}
return false;
}
module.exports = router;