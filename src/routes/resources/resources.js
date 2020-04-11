const express= require('express');
const router = express.Router();

require('../../database/connection');
const database = require('../../database/controller');


router.get('/resources',(req,res) =>{
    console.log("Peticion recibida");
    data = database.getCoctels();
    
    res.send(data);
})

router.post('/resources',(req,res) =>{
    console.log(req.body); 
    res.send(req.body);  
})

module.exports = router;