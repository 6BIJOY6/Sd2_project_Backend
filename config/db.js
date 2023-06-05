const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.url);
    console.log(
      `Conneted To Mongodb Databse`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};
module.exports = connectDB;