const mongoose = require('mongoose');
const config = require('./config')
const uri = config.dbURI;
console.log("Connecting to DB");

mongoose.connect(uri,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser : true,
    useFindAndModify : false
})
.then(db => console.log('DB is conected to',uri))
