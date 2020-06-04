var express = require('express');
var router = express.Router();
var restoModel = require('../model/shema');


/* GET home page. */

router.post('/sign-in', async function(req,res,next){

  var result = false
  var user = null
  var error = []
  
  if(req.body.emailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('champs vides')
  }

  if(error.length == 0){
    const user = await userModel.findOne({
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront
    })
  
    
    if(user){
      result = true
    } else {
      error.push('email ou mot de passe incorrect')
    }
  }
  
  

  res.json({result, user, error})


})



router.post('/sign-up', async function(req,res,next){

  var error = []
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if(data != null){
    error.push('utilisateur déjà présent')
  }

  if(req.body.firstnameFromFront == ''
  ||req.body.lastnameFromFront == ''
  || req.body.emailFromFront == ''
  || req.body.passwordFromFront == ''
  ){
    error.push('champs vides')
  }


  if(error.length == 0){
    var newUser = new userModel({
      firstname: req.body.firstnameFromFront,
      lastname: req.body.lastnameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront
    })
  
    saveUser = await newUser.save()
  
    
    if(saveUser){
      result = true
    }
  }
  

  res.json({result, saveUser, error})
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


=======
router.post('/mapScreens',async function(req, res, next) {
  var newResto = new restoModel ({
    restoName: "L'assiette du parc",
    longitude: 45.7729772, 
    latitude: 4.8383089
   });

   var resto = await newResto.save();
   if (resto){
     res.json({resto})
   } else {
     res.json({result:false})
   }
  //  var resto = await restoModel.find();
});

router.get('/restolist', async function(req, res, next) {
    var restaurant = await restoModel.find()

    if (restaurant){
      res.json({restaurant})
    } else {
      res.json({result:false})
    }
});
>>>>>>> db
module.exports = router;
