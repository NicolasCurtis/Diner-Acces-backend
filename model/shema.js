var mongoose = require('mongoose')

var restoSchema = mongoose.Schema({
    restoName: String,
    longitude: Number,
    latitude: Number
});

var restoModel = mongoose.model('restaurant', restoSchema)




module.exports = restoModel;