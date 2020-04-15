const express= require('express');
const router = express.Router();
const database = require('../../database/controller');

router.post('/resources/ing',async (req,res) =>{
    if(req.body){
        let err = await database.addIngredient(req.body);
        if (!err) {
            res.status(201).send("Exito al agregar ingrediente");  
        }else{
            res.status(400).send("Faltan datos");
        }
    }else{
        res.status(400).send("No se ha enviado nada");
    }
})
router.post('/resources/tools',async (req,res) =>{
    if(req.body){
        let err = await database.addTool(req.body);
        if (!err) {
            res.status(201).send("Herramienta guardada : "+req.body.name_en);   
        }else{
            res.status(400).send("Herramienta no guardada");
        }
    }else{
        res.status(400).send("No se ha enviado nada");
    }
})
router.post('/resources/step',(req,res) =>{
    if(req.body){
        database.addStep(req.body);
        res.status(201).send("Exito");  
    }else{
        res.send("Datos incompletos");  
    }
})
router.post('/resources/glass',async (req,res) =>{
    if(req.body){
        let err = await database.addGlass(req.body);
        if (!err) {
            res.status(201).send("Vaso guardado : "+req.body.name_en);   
        }else{
            res.status(400).send("Faltan datos");
        }
    }else{
        res.status(400).send("No se ha enviado nada");
    }
})

router.post('/resources/coctel',async (req,res) =>{
    if(req.body){
        let err = await database.addCoctel(req.body);
        if (!err) {
            res.status(201).send("Coctel guardado : "+req.body.name_en);   
        }else{
            res.status(400).send("Faltan datos");
        }
    }else{
        res.status(400).send("No se ha enviado nada");
    }
})
router.post('/resources',(req,res) =>{
    console.log(req.body); 
    res.send(req.body);  
})
// function ingredientComplete(req){
// if (req.body.name &&req.body.model && req.body.type && req.body.color && req.body.description) {
//     return true;
// }
// return false;
// }
module.exports = router;
