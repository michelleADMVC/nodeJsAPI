const mongoose = require ('mongoose');
const {Schema} = mongoose;
glassSchema = new Schema({
    name:{type:String,required:true},
    model:{type:String,required:true},
    capacity:{type:Number,required:true},
    description:{type:String,required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('Glass',glassSchema);