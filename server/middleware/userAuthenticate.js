const jwt = require('jsonwebtoken')
const User = require('../models/User')

const userAuthenticate = async (req, res, next) => {
    try {
        const token = req.cookies.teamup.token;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        
        const findUser = await User.findOne({email:verifyToken.email, "tokens.token":token})

        if(!findUser){
            throw new Error("Login Expired")
        }

        req.token=token
        req.findUser=findUser
        req.email=findUser.email
        next()
    } catch (error) {
        res.status(401).json({msg:'Unauthorized access'})
    }
}

module.exports = userAuthenticate