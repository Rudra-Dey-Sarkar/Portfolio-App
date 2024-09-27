const cors = require("cors");
const express = require("express");
const {AboutDatas} = require("./AllDatas/AboutPage/AboutDatas");
const {MainDatas} = require("./AllDatas/MainPage/MainDatas");
const {ProjectDatas} = require("./AllDatas/ProjectPage/ProjectDatas");
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

//test
app.get("/test", (req, res)=>{
    try{
        res.json("test")
    }catch(error){
        res.json("data cannot be send due to :- ",error);
    }
})

//sending home section 1 datas
app.get("/get-Main-datas", (req, res)=>{
    try{
        res.json(MainDatas)
    }catch(error){
        res.json("data cannot be send due to :- ",error);
    }
})
//sending about section 1 datas
app.get("/get-about-datas", (req, res)=>{
    try{
        res.json(AboutDatas)
    }catch(error){
        res.json("data cannot be send due to :- ",error);
    }
})
//sending projects datas
app.get("/get-project-datas", (req, res)=>{
    try{
        res.json(ProjectDatas)
    }catch(error){
        res.json("data cannot be send due to :- ",error);
    }
})



//creating a channel port
app.listen(5000, ()=>{
    console.log("port 5000 is active");
})
