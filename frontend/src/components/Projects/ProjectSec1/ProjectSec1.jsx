import React, { useEffect, useState } from 'react'
import "./ProjectSec1.css"
import { Link } from 'react-router-dom'
import axios from "axios"
import { motion } from "framer-motion"

async function ProjectData(setDatas){

  try {
    const response =await fetch(`${process.env.REACT_APP_BACKEND_KEY}/get-project-datas`);

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

function ProjectSec1() {

  const [datas, setDatas] = useState();



  useEffect(() => {
    ProjectData(setDatas);
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
        <div  className='project-sec1'>
          <p className='projects-mt'>Projects</p>
          {datas.map((e, index) => (
            <section key={index}>

                <div className='project'>
                  <p className='p-mt'>{e?.p_name}</p>
                  <Link to={e.link}><img src={e?.p_pics?.pic1} alt="" className='p-img' /></Link>
                  <p className='p-abt'>{e?.p_details}</p>
                </div>

            </section>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectSec1
