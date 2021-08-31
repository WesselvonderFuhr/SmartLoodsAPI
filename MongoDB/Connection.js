const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:yes@smartloods.lxka6.mongodb.net/SmartLoods";
//const URI = "mongodb://localhost/SmartLoods";
const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected');
}

module.exports = connectDB;
