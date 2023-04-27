const express = require('express')
const isAuth = require('../Middlewares/isAuth')
const { addCommande, getAllCommande, getMyCommande, getoneCommande, deleteCommande, updatecommande } = require('../Conrollers/Commande')

const commandeRouter = express.Router()

commandeRouter.post('/addCommande',isAuth,addCommande)
commandeRouter.get('/getAllCommandes',getAllCommande)
commandeRouter.get('/getMyCommande',isAuth,getMyCommande)
commandeRouter.get('/getOneCommande/:id',getoneCommande)
commandeRouter.delete('/deletecommande/:id',deleteCommande)
commandeRouter.put('/updatecommande/:id',updatecommande)

module.exports =  commandeRouter