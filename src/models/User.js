const mongoose = require ('mongoose');
const {Schema} = mongoose;
const bcrypt = require ('bcryptjs');
userSchema = new Schema({
   username : {type:String,required:true},
   email:{type:String,required:true},
   password: {type:String,required:true},
})  

userSchema.methods.encryptPassword = async(password) =>{
const salt = await bcrypt.genSalt(10);
return bcrypt.hash(password,salt);
};
userSchema.methods.validatePassword = async function (password){
   return bcrypt.compare(password, this.password); 
};

module.exports = mongoose.model('users',userSchema);