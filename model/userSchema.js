var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
<<<<<<< HEAD
    prenom: String,
    nom: String,
    email: String,
    mdp : String
});

var usersModel = mongoose.model('users', userSchema)

module.exports = usersModel;
=======
    prenom : String,
    nom: String,
    email: String,
    mdp: String
})

var userModel = mongoose.model('users', userSchema)

module.exports =  userModel;
>>>>>>> bb7f00379cc644b61ddc3b0675880be251d2f566
