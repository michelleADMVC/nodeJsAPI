const jwt = require ('jsonwebtoken');
const config = require('../../database/users/config');

function verifyToken (req, res, next){
    const token = req.headers["access-token"];
    console.log(req.headers);
     
    if (!token) {
        return res.status(401).json({
            "error":true,
            "auth": false,
            "description":'no token provided'
        });
    }
    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
}
module.exports = verifyToken;