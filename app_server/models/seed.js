// Bring in the DB connection and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// delete all existing records, them insert the seed data
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database: ', err);
    }
};

// Close the MongoDB connection and exit
seedDB().then(async() => {
    await Mongoose.connection.close();
    process.exit(0);
});