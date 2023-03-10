require('dotenv').config()
require('express-async-errors')
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const errorHandlerMiddleware = require('./middlewares/error-handler')
const notFoundMiddleware = require('./middlewares/not-found')
const auth = require('./middlewares/authentication')

// routes
const authRoutes = require('./routes/auth')
const inviteRoutes = require('./routes/invite')
const visitRoutes = require('./routes/visit')

app.use(express.json())

app.use('/api/v1', authRoutes)
app.use('/api/v1/invite', auth, inviteRoutes)
app.use('/api/v1/visit', auth, visitRoutes)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    app.listen(port, ()=> console.log(`server is running at port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()