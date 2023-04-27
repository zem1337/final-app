const express = require('express')
const { addCar, readCars, deleteCar, updateCar, readCar } = require('../Conrollers/Car')


const carRouter = express.Router()

carRouter.post('/addCar',addCar)
carRouter.get('/CarList',readCars)
carRouter.delete('/deletecar/:id',deleteCar)
carRouter.put('/updatecar/:id',updateCar)
carRouter.get('/readCar/:id',readCar)


module.exports = carRouter