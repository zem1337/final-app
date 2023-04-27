const Car = require("../Models/Car")

exports.addCar=async(req,res)=>{
    try {
        const found = await Car.findOne({model : req.body.model})
        if(found){
            return res.status(400).send('Car model already exists')
        }
        const newCar = new Car(req.body)
        await newCar.save()
        res.status(200).send({Msg:'New Car Model Added',newCar})
    } catch (error) {
        res.status(500).send('Could not add car')
    }
}

exports.readCars=async(req,res)=>{
    try {
        const Cars = await Car.find()
        res.status(200).send({Msg : "List of cars",Cars})
    } catch (error) {
        res.status(500).send('Could not get cars')
    }
}

exports.deleteCar=async(req,res)=>{
    try {
        const {id} = req.params
        await Car.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Car deleted'})
    } catch (error) {
        res.status(500).send('Could not delete car')
    }
}

exports.updateCar=async(req,res)=>{
    try {
        const {id} = req.params
        await Car.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Car updated'})
    } catch (error) {
        res.status(500).send('Could not update car')
    }
}

exports.readCar=async(req,res)=>{
    try {
        const {id} = req.params
        const oneCar = await Car.findById(id)
        res.status(200).send({Msg:'The car is',oneCar})
    } catch (error) {
        res.status(500).send('Could not get car')
    }
}