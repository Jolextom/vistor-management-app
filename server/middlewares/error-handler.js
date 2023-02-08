const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || 500,
        msg: err.message || 'Something went wrong try again later',
    }
    return res.status(customError.statusCode).json(customError.msg)
}

module.exports = errorHandler