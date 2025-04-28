const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONOGO_URI);
    if (res) {
      console.log("connection to database done successfully!");
    }
  }
  catch (err) {
    console.log(`there is error while connecting to database: ${err.message}`);
  }
}

module.exports = {
  connectToDb
}