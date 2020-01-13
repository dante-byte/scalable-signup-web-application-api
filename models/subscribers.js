const mongoose = require("mongoose"),

subscriberSchema = mongoose.Schema({

    name: String,
    email: String,
    zipCode: Number
})




module.exports = mongoose.model('Subscriber', subscriberSchema); //model use to instantiate new subscribers 
