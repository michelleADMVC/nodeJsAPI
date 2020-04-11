const mongoose = require ('mongoose');
const {Schema} = mongoose;
const coctelSchema = new Schema({
    name:{type:String,required:true},
    description: {type:String, required:true},
    created_at:{type :Date,default : Date.now },
    views : {type:Number, required:false},
})
module.exports = mongoose.model('Coctel',coctelSchema);   