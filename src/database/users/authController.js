const jwt = require ('jsonwebtoken');
const config = require('../config');

module.exports={
    newToken: async (user) => {
        const token = await jwt.sign({id:user._id},config.secret,{
            expiresIn : 60 * 60
        });
        return token
    }
}
