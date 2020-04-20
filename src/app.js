const express = require ('express');
//Initializations 
const app = express();
const bodyParser = require('body-parser')
const  morgan = require('morgan')
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
//Routes
app.use(require('./routes/resources/get'));
app.use(require('./routes/resources/post'));
app.use(require('./routes/resources/delete'));
app.use(require('./routes/users/controller'));
app.use(require('./routes/index'));


app.listen(app.get('port'),()=>{
    console.log("Server is listening on "+app.get('port'));
});