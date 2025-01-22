import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import "./MainSec1.css";

async function MainSec1Data(setDatas){

  try {
    const response =await fetch(`${process.env.REACT_APP_BACKEND_KEY}/get-main-datas`, {
    method:"POST",
    headers:{
     "Content-Type" : "application/json"
    },
    body:JSON.stringify({secName:"sec1"})
    });

    if(response.ok){
     const data = await response.json();
       setTimeout(() => {
         setDatas(data);
       }, 1000);
    }
     
   } catch (error) {
     console.log("request to fetch the data not send due to", error);
   }
}

function MainSec1() {
  const [datas, setDatas] = useState();

  useEffect( () => {
    MainSec1Data(setDatas);
  }, [])

  return (
    <div>
      {!datas ? (
        <div style={{ backgroundColor: "#081b29", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <motion.div
            style={{ backgroundColor: "#0ef", width: "100px", height: "100px" }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }} />
        </div>
      ) : (
        <div>
          {
            datas.map((e, index) => (
              <section key={index} className='main-sec1'>
                <div className='intro-texts'>
                  <p className='intro-heading'>{e?.main_text1}</p>
                  <div id='type'>
                    <p>I'm a </p>
                    <Typewriter
                      options={{
                        strings: ['Software Developer', 'CGI Artist', 'Video Editor', 'Gamer', 'Athlete'],
                        autoStart: true,
                        loop: true,
                      }} />
                  </div>
                  <p>{e?.intro_text1}</p>
                  <div className='btns'>
                    <a href={e?.pdf_link} download={e?.pdf_name}>
                      <button id='download-btns'>Download CV</button>
                    </a>
                    <Link to="/projects" id='projects-btns'>Projects</Link>
                  </div>
                </div>
                <img src={e?.pics?.pic1} alt={e?.main_text1} />
              </section>

            ))
          }
        </div>
      )}
    </div>
  );
}

export default MainSec1
