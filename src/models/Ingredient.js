const mongoose = require ('mongoose');
const {Schema} = mongoose;
ingredientSchema = new Schema({
    name_es:{type:String,required:true},
    name_en:{type:String,required:true},
    model:{type:String,required:true},
    view_model:{type:String,required:true},
    type:{type:String,required:true},
    color:{type:String,required:true},
    description_es: {type:String, required:true},
    description_en: {type:String, required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('Ingredient',ingredientSchema);