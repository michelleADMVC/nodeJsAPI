const express= require('express');
const router = express.Router();
const database = require('../../database/controller');
router.delete('/resources/tools/:_id', async(req,res) =>{
    console.log("Peticion de eliminar :");
    let err  = await database.removeTool(req.params);
   if (!err) {
    res.status(200).send('Elemento eliminado');
   }else{
    res.status(400).send('El elemento no se encuentra en la base datos');
   }
})
router.delete('/resources/ing/:_id', async(req,res) =>{
    console.log("Peticion de eliminar :");
    let err = await database.removeIngredient(req.params);
   if (!err) {
    res.status(200).send('Elemento eliminado');
   }else{
    res.status(400).send('El elemento no se encuentra en la base datos');
   }
})
router.delete('/resources/glass/:_id', async(req,res) =>{
    console.log("Peticion de eliminar :");
    let err = await database.removeGlass(req.params);
   if (!err) {
    res.status(200).send('Elemento eliminado');
   }else{
    res.status(400).send('El elemento no se encuentra en la base datos');
   }
})
router.delete('/resources/coctel/:_id', async(req,res) =>{
    console.log("Peticion de eliminar :");
    let err = await database.removeCoctel(req.params);
   if (!err) {
    res.status(200).send('Elemento eliminado');
   }else{
    res.status(400).send('El elemento no se encuentra en la base datos');
   }
})
module.exports = router;