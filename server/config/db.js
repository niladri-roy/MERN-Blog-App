const mongoose = require("mongoose");

const connectDB = async () => 
{
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Database is connected...");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;