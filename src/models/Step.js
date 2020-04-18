const mongoose = require ('mongoose');
const {Schema} = mongoose;
stepSchema = new Schema({
    step_description:{type:[Schema.Types.ObjectId],required:true},
    created_at:{type :Date,default : Date.now }
})
module.exports = mongoose.model('step',stepSchema); 