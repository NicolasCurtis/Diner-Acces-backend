var express = require('express');
var router = express.Router();
var restoModel = require('../model/shema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
module.exports = router;
