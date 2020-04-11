const mongoose = require('mongoose');
const uri = 'mongodb://localhost/coctelapp';
mongoose.connect(uri,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser : true,
    useFindAndModify : false
})
.then(db => console.log('DB is conected to',uri))
.catch(err=> console.error(err));
