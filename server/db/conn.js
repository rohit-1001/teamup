const mongoose = require('mongoose');

const db = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Connected to database');
  } catch (error) {
    console.error('Connection falied:', error);
  }
};

connectDB();

module.exports = connectDB;
