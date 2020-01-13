const Subscriber = require('../models/subscribers');

//require subscriver module


exports.getAllSubscribers = (req, res, next) => { // pass data from the database to the next middleware function


    //query with find on the subscriber model
    Subscriber.find({}, (error, subscribers) => {

        //pass error to the next middleware function 

        if (error) next(error);

        //set data that comes back from mongoDb on request

        req.data = subscribers;

        next();


    });

}


