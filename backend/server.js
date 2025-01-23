require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { AboutDatas } = require("./AllDatas/AboutPage/AboutDatas");
const ConnectDB = require("./src/config/db");
const project = require("./src/models/projects");
const main = require("./src/models/main");

ConnectDB();


//Cors data configure
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

//creating express app
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


//Access main data
app.post("/get-main-datas", async (req, res) => {
    const { secName } = req.body;
    try {
        const response = await main.find({secName:secName});
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
//Add main data
app.post("/add-main-datas", async (req, res) => {
    const { secName, mainText, introText, pics, pdfLink, pdfName } = req.body;

    const datas = {
        secName:secName, 
        mainText:mainText,
        introText:introText,
        pics:pics,
        pdfLink:pdfLink,
        pdfName:pdfName
    }

    try {
        const response = await main.insertMany([datas]);
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
//sending about section 1 datas
app.get("/get-about-datas", (req, res) => {
    try {
        res.json(AboutDatas)
    } catch (error) {
        res.json("data cannot be send due to :- ", error);
    }
})
//Access project data
app.get("/get-project-datas", async (req, res) => {
    try {
        const response = await project.find();
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
//Add project data
app.post("/add-project-datas", async (req, res) => {
    const { p_name, p_pics, link, p_details} = req.body;

    const datas = {
        p_name: p_name,
        p_pics:p_pics,
        link: link,
        p_details: p_details
    }

    try {
        const response = await project.insertMany([datas]);
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});


//creating a channel port
app.listen(process.env.PORT, () => {
    console.log("App is listening on the Port :-", process.env.PORT);
})
