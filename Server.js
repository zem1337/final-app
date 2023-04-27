const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const carRouter = require('./Routes/Car')
const commandeRouter = require('./Routes/Commande')


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/auth',userRouter)
app.use('/api/car',carRouter)
app.use('/api/commande',commandeRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))