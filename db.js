const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1/Store"

const ConnectToMongo = async()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("connect to mongo is successfull.");
    }
    catch(err){
        console.log("connection unsecceessfull",err);
    }
}

module.exports = ConnectToMongo