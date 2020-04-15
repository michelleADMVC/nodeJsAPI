const express= require('express');
const router = express.Router();

require('../../database/connection');
const database = require('../../database/controller');


router.get('/resources/coctels',async (req,res) =>{
    console.log("Peticion recibida");
    let data = await database.getCoctels();
    res.json(data);
})
router.get('/resources/glass',async (req,res) =>{
    console.log("Peticion recibida");
    let data = await database.getGlasses();
    res.json(data)
})
router.get('/resources/ing',async (req,res) =>{
    console.log("Peticion recibida");
    let data = await database.getIngredients();
    res.json(data)
})
router.get('/resources/tools',async (req,res) =>{
    console.log("Peticion recibida");
    let data = await database.getTools();
    res.json(data)
})



module.exports = router;