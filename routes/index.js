var express = require('express');
var router = express.Router();
var restoModel = require('../model/shema');
var userModel = require("../model/UserSchema")



router.post('/sign-in', async function (req, res, next) {

  var result = false
  var user = null

  // if (req.body.emailFromFront == ''
  //   || req.body.passwordFromFront == ''
  // ) {
  //   error.push('champs vides')
  // }


  const users = await userModel.findOne({
    email: req.body.emailFromFront,
    mdp: req.body.passwordFromFront
  })


  //   if (user) {
  //     result = true
  //   } else {
  //     error.push('email ou mot de passe incorrect')
  //   }
  // }
  if (users) {
    result = true
  }


  res.json({ result, users })


})



router.post('/sign-up', async function (req, res, next) {
  var result = false;
  var error = null;
  var saveUser = null;

  if (req.body.firstnameFromFront == ''
    || req.body.lastnameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == '') {
    error = 'champs vide'
  };

  var userFind = await userModel.findOne({ email: req.body.emailFromFront });

  if (userFind) {
    res.json({ result })
  } else {
    if (error == null){
      var newUser = new userModel({
        prenom: req.body.firstnameFromFront,
        nom: req.body.lastnameFromFront,
        email: req.body.emailFromFront,
        mdp: req.body.passwordFromFront
      })
  
      saveUser = await newUser.save();
  
      if (saveUser) {
        result = true
      }
    }
    

  }

  res.json({ result, saveUser, error: error })

})


router.post('/mapScreens', async function (req, res, next) {
  var newResto = new restoModel({
    restoName: "L'assiette du parc",
    longitude: 45.7729772,
    latitude: 4.8383089
  });

  var resto = await newResto.save();
  if (resto) {
    res.json({ resto })
  } else {
    res.json({ result: false })
  }
  //  var resto = await restoModel.find();
});

router.get('/restolist', async function (req, res, next) {
  var restaurant = await restoModel.find()

  if (restaurant) {
    res.json({ restaurant })
  } else {
    res.json({ result: false })
  }
});
module.exports = router;