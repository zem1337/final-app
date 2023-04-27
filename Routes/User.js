const express = require('express')
const { signUp, signIn, readUsers, deleteUser, updateUser, readUser } = require('../Conrollers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middlewares/Validator')

const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,signUp)
userRouter.post('/SignIn',logginValidation,Validation,signIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))
userRouter.get('/getAllUsers',readUsers)
userRouter.delete('/deleteUser/:id',deleteUser)
userRouter.put('/updateUser/:id',updateUser)
userRouter.get('/readUser/:id',readUser)

module.exports = userRouter