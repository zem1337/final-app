const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.signUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{Msg : 'Email used'}]})
        }

        const newUser = new User(req.body)

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashPassword

        await newUser.save()
        
        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({Msg:'User Added',newUser,token})


    } catch (error) {
        res.status(500).send({errors : [{Msg :'Could not SignUp'}]})
    }
}


exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{Msg : 'Email not exist'}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{Msg : 'Wrong password'}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({Msg : 'Logged In',found,token})
    } catch (error) {
        res.status(500).send({errors : [{Msg :'Could not SignIn'}]})
    }
}