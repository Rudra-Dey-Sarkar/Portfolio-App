require("dotenv").config();
const mongoose = require("mongoose");

const ConnectDB = ()=>{
    mongoose.connect(process.env.DB).then(()=>{
        console.log("Database connected");
    }).catch((errors)=>{
        console.log("Cannot connect the database due to :-", errors);
    })
}

module.exports = ConnectDB;