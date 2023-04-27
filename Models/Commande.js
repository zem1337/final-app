const mongoose = require("mongoose")


const commandeSchema = mongoose.Schema(
    {
       owner : {
        type : mongoose.Types.ObjectId,
        ref : 'sana'
       },
       car :  {
        type : mongoose.Types.ObjectId,
        ref : 'Car'
       },
       nbrJour : Number,
       prixTotal : Number,
       status : String


    }
)

module.exports = mongoose.model('commande',commandeSchema)