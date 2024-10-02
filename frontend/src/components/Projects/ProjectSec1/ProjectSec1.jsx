import React, { useEffect, useState } from 'react'
import "./ProjectSec1.css"
import { Link } from 'react-router-dom'
import axios from "axios"
import { motion } from "framer-motion"

function ProjectSec1() {

  const [datas, setDatas] = useState();

  useEffect(() => {
    try {
      axios.get("https://portfolio-app-backend-five.vercel.app/get-project-datas").then((response) => {
setDatas(response.data);

      }).catch((err) => {
        console.log("data not fetched due to :-", err);
      })
    } catch (error) {
      console.log("request to fetch the data not send due to", error);
    }
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
          {datas.map((e, index) => (
            <section key={index} className='project-sec1'>
              <p className='projects-mt'>{e.sec1.main_text1}</p>
              {e.sec1.projects.map((sec1_e, sec1_i) => (
                <div key={sec1_i} className='project'>
                  <p className='p-mt'>{sec1_e.p_name}</p>
                  <Link to={sec1_e.link}><img src={sec1_e.p_pics.pic1} alt="" className='p-img' /></Link>
                  <p className='p-abt'>{sec1_e.p_details}</p>
                </div>
              ))}
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectSec1
