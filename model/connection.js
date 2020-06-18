var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
  }
  mongoose.connect(process.env.MONGODB_URL, 
      options,         
      function(err) {
       console.log(err);
      }
  );
  module.exports = mongoose