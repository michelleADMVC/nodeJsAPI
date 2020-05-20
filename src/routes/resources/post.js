const express= require('express');
const router = express.Router();
const database = require('../../database/controller');


router.post('/resources/:collection',async (req,res) =>{
    if (await database.collectionValidator(req.params.collection)) {
        let dbResponse = await database.addObject(req.body,req.params.collection);
        if (!dbResponse.error) {
            res.status(201).json(dbResponse);
        }else{
            res.status(401).json(dbResponse);
        }
    }else{
      res.status(400).json({"error":true,"description":"not valid collection"});
    }     
})

//Unused

router.post('/resources/step',async (req,res) =>{
    let dbResponse = await database.add(req.body);
    if (!dbResponse.error) {
        res.status(400).json(dbResponse);
    }else{
        res.status(201).json(dbResponse);
    }
})

module.exports = router;
