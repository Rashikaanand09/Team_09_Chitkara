const mongoose = require('mongoose');

mongoose.set('debug', true);

const connectDB = async () => {
    await mongoose.connect(process.env.mongodb)
    console.log('MongoDB Connected')
}

module.exports = connectDB