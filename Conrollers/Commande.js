const Commande = require("../Models/Commande")

exports.addCommande =async(req,res)=>{
    try {

        const newcommande = new Commande({...req.body,owner : req.user._id})

        await newcommande.save()

        res.status(200).send({msg : "Commande Adedd", newcommande})
    } catch (error) {
        res.status(500).send({msg : "could not add "})
    }
}

exports.getAllCommande=async(req,res)=>{
    try {
        const commandes = await Commande.find().populate('owner').populate('car')
        res.status(200).send({msg : "List of commandes",commandes})
    } catch (error) {
        res.status(500).send({msg : "could not get"})
    }
}
exports.getMyCommande=async(req,res)=>{
    try {
        // const {id} = req.params
        const commandes = await Commande.find({owner:req.user._id}).populate('owner').populate('car')
        res.status(200).send({msg : "List of commandes",commandes})
    } catch (error) {
        res.status(500).send({msg : "could not get"})
    }
}

exports.getoneCommande=async(req,res)=>{
    try {
        const {id} = req.params
        const commande = await Commande.findById(id).populate('owner').populate('car')

        res.status(200).send({msg : "commande",commande})
    } catch (error) {
        res.status(500).send({msg : "could not get commande"})
    }


}

exports.deleteCommande=async(req,res)=>{
    try {
        const {id} = req.params
        await Commande.findByIdAndDelete(id)
        res.status(200).send({msg : "commande delete"})
    } catch (error) {
        res.status(500).send({msg : "could not delete commande"})
    }
}

exports.updatecommande=async(req,res)=>{
    try {
        const {id} = req.params
        await Commande.findByIdAndUpdate(id,{$set : req.body })
        res.status(200).send({msg : "Commande update"})
    } catch (error) {
        res.status(500).send({msg : "could not update"})
    }
}