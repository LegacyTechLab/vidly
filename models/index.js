const mongoose = require("mongoose")
require("dotenv").config()
const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

module.exports.connectToMongoDB = function(){
    mongoose.connect(MONGO_DB_CONNECTION_URL);
    mongoose.connection.on("connected",()=> console.log("Connected to Mongo successfully"));
    mongoose.connection.on("error",(err)=> console.log(err));
    mongoose.connection.on("disconnected",()=> console.log("Connected to Mongo successfully"));
};
