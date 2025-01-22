import React, { useEffect, useState } from 'react'
import "./MainSec2.css"
import axios from "axios"
import { SoftwareDeveloper, Gamer, Athlete  } from '../../Icons/Icons';
import { motion } from "framer-motion"

async function MainSec2Data(setDatas){

  try {
    const response =await fetch(`${process.env.REACT_APP_BACKEND_KEY}/get-main-datas`, {
    method:"POST",
    headers:{
     "Content-Type" : "application/json"
    },
    body:JSON.stringify({secName:"sec2"})
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

function MainSec2() {
  const [datas, setDatas] = useState();

  useEffect( () => {
    MainSec2Data(setDatas);
  }, [])

  return(
    <div>
            {!datas ? (
                <div style={{backgroundColor:"#081b29" ,width: "100%", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
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
          {datas.map((e, index)=>(
          <section key={index} className='main-sec2'>
            <div className='about-texts'>
              <div className='intro-name'><p>I'm</p><p>Rudra</p></div>
              <div className='software-developer'><p>a Software<SoftwareDeveloper/>Developer</p></div>
              <p className='gamer'> a Passionate <Gamer/> Gamer</p>
              <p className='gamer'> a Passionate <Athlete/> Athlete</p>
            </div>
            <img src={e?.pics?.pic1}></img>
          </section>
          ))}
        </div>
      )}
      
    </div>
  )
}
export default MainSec2
