const express = require ('express');
//Initializations 
const app = express();
const bodyParser = require('body-parser')
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//Routes

app.use(require('./routes/index'));
app.use(require('./routes/resources'));

app.listen(app.get('port'),()=>{
    console.log("Server is listening on "+app.get('port'));
});