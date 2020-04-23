const express= require('express');
const router = express.Router();
router.get('/',(req,res) =>{
    req.session.cuenta = req.session.cuenta ? req.session.cuenta +1 : 1;
    res.send(`Hola, has visto esta pagina : ${req.session.cuenta}`);
})
module.exports = router;