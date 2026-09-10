const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected Successfully");
  } catch (err) {
    console.error(err);
    console.log("MongoDb connection Failed");
    process.exit(1);
  }
};

module.exports = connectDB;
