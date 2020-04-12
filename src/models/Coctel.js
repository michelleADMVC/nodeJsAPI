const mongoose = require ('mongoose');
const {Schema} = mongoose;
const coctelSchema = new Schema({
    name_en:{type:String,required:true},
    name_es:{type:String,required:true},
    description_en: {type:String, required:true},
    description_es: {type:String, required:true},
    premium:{type :Boolean,default : false},
    views : {type:Number,default : 0},
    created_at:{type :Date,default : Date.now },
   
})
module.exports = mongoose.model('Coctel',coctelSchema);   