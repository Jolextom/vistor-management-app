const jwt = require('jsonwebtoken')
const customError = require('http-errors')


const auth = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new customError.Unauthorized('Authentication Invalid')
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET)

        req.user = {userId:payload.userId, name:payload.name}
        next()
        
    } catch (error) {
        throw new customError.Unauthorized('Invalid Token')
    }
}

module.exports = auth