const mongoose = require("mongoose");

const project = new mongoose.Schema({
        p_name: String,
        p_pics: {
            pic1: String,
        },
        link: String,
        p_details: String
})

module.exports = mongoose.model("projects", project);