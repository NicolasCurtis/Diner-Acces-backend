var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    prenom : String,
    nom: String,
    email: String,
    mdp: String
})

var userModel = mongoose.model('users', userSchema)

module.exports =  userModel;