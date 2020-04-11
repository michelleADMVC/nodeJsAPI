const mongoose = require ('mongoose');
const {Schema} = mongoose;
toolSchema = new Schema({
    name:{type:String,required:true},
    model:{type:String,required:true},
    description:{type:String,required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('tool',toolSchema);
