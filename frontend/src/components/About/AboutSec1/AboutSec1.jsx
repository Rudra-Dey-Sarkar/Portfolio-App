import React, { useEffect, useState } from 'react'
import "./AboutSec1.css"
import { Computer } from '../../Icons/Icons'
import axios from "axios"
import { motion } from "framer-motion"

function AboutSec1() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    try {
      axios.get("https://portfolio-app-backend-five.vercel.app/get-about-datas").then((response) => {
          setTimeout(() => {
          setDatas(response.data);
        }, 1000);
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
      {datas.map((e, index) => (
        <section key={index} className='about-sec1'>

          <div className='about-intro-text'>
            <p className='about-software-developer'>{e.sec1.main_text1}<Computer /></p>
          </div>

          <div className='skills'>
            <p className='skills-fs-text'>{e.sec1.skills.skills_main_text1}</p>
            <div className='fullstack'>
              <div className='frontend'>
                <p className='skills-f-text'>{e.sec1.skills.frontend.frontend_main_text1}</p>
                {e.sec1.skills.frontend.frontend_skills.map((f_e, f_i) => (
                  <div key={f_i}>
                    {f_e.skill !== "NextJS" ? (
                      <div className='skills-f'>
                        <p>{f_e.skill}</p>
                        <img src={f_e.icon} alt={f_e.skill} className='skills-f-icons' />
                      </div>
                    ) : (
                      <div className='skills-f'>
                        <p>{f_e.skill}</p>
                        <div style={{ backgroundColor: "white" }}><img src={f_e.icon} alt={f_e.skill} className='skills-f-icons' /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className='backend'>
                <p className='skills-b-text'>{e.sec1.skills.backend.backend_main_text1}</p>
                {e.sec1.skills.backend.backend_skills.map((b_e, b_i) => (
                  <div key={b_i}>
                    {b_e.skill !== "ExpressJS" ? (
                      <div className='skills-b'>
                        <p>{b_e.skill}</p>
                        <img src={b_e.icon} alt={b_e.skill} className='skills-b-icons' />
                      </div>
                    ) : (
                      <div className='skills-b'>
                        <p>{b_e.skill}</p>
                        <div style={{ backgroundColor: "white" }}><img src={b_e.icon} alt={b_e.skill} className='skills-b-icons' /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </section>
      ))}
        </div>
      )}

    </div>
  )
}

export default AboutSec1
