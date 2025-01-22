const mongoose = require("mongoose");

const main = new mongoose.Schema({
        secName: String, 
        mainText: String,
        introText: String,
        pics: {
            pic1: String,
        },
        pdfLink:String,
        pdfName:String,
})

module.exports = mongoose.model("main", main);