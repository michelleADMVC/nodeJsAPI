const express= require('express');
const router = express.Router();

require('../database/connection');
const database = require('../database/methods');


router.get('/resources',(req,res) =>{
    console.log("Peticion recibida");
    
    data = database.showCoctels();
    res.send({ username: 'Flavio' });
})

router.post('/resources',(req,res) =>{
    console.log(req.body); 
    res.send(req.body);  
})
router.post('/resources/add/ing',(req,res) =>{
    if(ingredientComplete(req)){
        database.saveIngredient(req.body);
        res.send("success");  
    }else{
        console.log(req.body.name);
        console.log(req.body.type);
        console.log(req.body.color);
        console.log(req.body.description);

        res.send("Datos incompletos");  
    }

})
function ingredientComplete(req){
if (req.body.name && req.body.type && req.body.color && req.body.description) {
    return true;
}
return false;
}
module.exports = router;