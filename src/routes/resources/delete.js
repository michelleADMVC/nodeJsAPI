const express= require('express');
const router = express.Router();
const database = require('../../database/controller');


router.delete('/resources/:collection/:_id', async(req,res) =>{
    if (await database.collectionValidator(req.params.collection)) {
        let dbResponse = await database.removeObject({"_id":req.params._id},req.params.collection);
        if (!dbResponse) {
            res.status(201).json(dbResponse);
        }else{
            res.status(401).json(dbResponse);
        }
    }else{
      res.status(400).json({"error":true,"description":"not valid collection"});
    }     
})
module.exports = router;