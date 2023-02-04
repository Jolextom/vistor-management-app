const User = require('../models/User')
const customError = require('http-errors')

const register = async (req, res) => {
        const user = await User.create({...req.body})
        const token = user.createJWT()
        res.status(201).json({user:{
            name:user.name,
            email:user.email,
        }, token})
}
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new customError.BadRequest('Please provide all values');
    }

    const user = await User.findOne({email})
    if(!user){
        throw new customError.Unauthorized('Invalid credentials');
    }

    const isPasswordCorect = await user.comparePassword(password)
    if(!isPasswordCorect){
        throw new customError.Unauthorized('Invalid credentials');
    }

    const token = user.createJWT()
    res.status(200).json({user:{
        name:user.name,
        email:user.email,
        token
    }})

}

module.exports = {
    register,
    login
}