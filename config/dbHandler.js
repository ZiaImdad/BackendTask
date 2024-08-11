const mongoose = require("mongoose");

const colors = require("colors");

const connecttoDb = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/expressjs`);
    console.log(`connect to mongodb ${conn.connection.host}`.green);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`.red);
    process.exit(1);
  }
};

module.exports = connecttoDb;
