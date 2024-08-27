const mongoose = require("mongoose");

const colors = require("colors");

const connecttoDb = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://ziaimdad12:ideqXK6eedCHUZjW@cluster0.ecj61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`connect to mongodb ${conn.connection.host}`.green);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`.red);
    process.exit(1);
  }
};

module.exports = connecttoDb;
