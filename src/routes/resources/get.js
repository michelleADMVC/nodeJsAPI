const express= require('express');
const router = express.Router();

require('../../database/connection');
const database = require('../../database/controller');


router.get('/resources/:collection',async (req,res) =>{
    if (await database.collectionValidator(req.params.collection)) {
        let dbResponse = await database.getCollection(req.params.collection);
        let statusResponse = dbResponse[0];
        if (!statusResponse.error) {
            res.status(200).json(dbResponse);
        }else{
            res.status(400).json(dbResponse);
        }
    }else{
        res.status(400).json({"error":true,"description":"not valid collection"});
    }
})
router.get('/resources/:collection/:_id',async (req,res) =>{
    if (await database.collectionValidator(req.params.collection)) {
        let dbResponse = await database.getObjectByID(req.params._id,req.params.collection);
        console.log(dbResponse);
        let statusResponse = dbResponse[0];
        if (!statusResponse.error) {
            res.status(200).json(dbResponse);
        }else{
            res.status(400).json(dbResponse);
        }
    }else{
        res.status(400).json({"error":true,"description":"not valid collection"});
    }
    
})
router.get('/resources',(req,res) =>{
    res.status(400).json({"error":true,"description":"try to find /resources/collections"});
})


module.exports = router;