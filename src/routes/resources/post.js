const express= require('express');
const router = express.Router();
const database = require('../../database/controller');

router.post('/resources/ing',(req,res) =>{
    if(req.body){
        database.addIngredient(req.body);
        res.send("success"); 
    }else{
        res.send("Datos incompletos");
    }
})
router.post('/resources/tool', (req,res) =>{
    if(req.body){
        database.addTool(req.body);
            res.send("Tool saved : "+req.body.name_en);  
    }else{
        res.send("No se ha enviado nada");
    }
})
router.post('/resources/step',(req,res) =>{
    if(req.body){
        database.addStep(req.body);
        res.send("success");  
    }else{
        res.send("Datos incompletos");  
    }
})
// function ingredientComplete(req){
// if (req.body.name &&req.body.model && req.body.type && req.body.color && req.body.description) {
//     return true;
// }
// return false;
// }
module.exports = router;
