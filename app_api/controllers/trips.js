const mongoose = require('mongoose');
const Trip = require('../models/travlr');   // Register the model
const Model = mongoose.model('trips');      // Get the model

// GET: /trips - list all the trips
// Regardless of putcome, response must includw HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({})   // No filter, return all records
        .exec();

        // Uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json({message: err});
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips/:tripCode - list a single
// Regardless of putcome, response must includw HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})   // No filter, return all records
        .exec();

        // Uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json({message: err});
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};