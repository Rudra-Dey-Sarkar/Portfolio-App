import React, { useEffect, useState } from 'react'
import "./AboutSec1.css"
import { Computer } from '../../Icons/Icons'
import axios from "axios"
function AboutSec1() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://portfolio-app-backend-five.vercel.app/get-about-datas").then((response) => {
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
                {e.sec1.skills.frontend.frontend_skills.map((f_e, f_i)=>(
                  <p key={f_i} className='skills-f'>{f_e.skill}&nbsp;{f_e.icon}</p>
                ))}
              </div>

              <div className='backend'>
                <p className='skills-b-text'>{e.sec1.skills.backend.backend_main_text1}</p>
                {e.sec1.skills.backend.backend_skills.map((b_e, b_i)=>(
                  <p key={b_i} className='skills-f'>{b_e.skill}&nbsp;{b_e.icon}</p>
                ))}
              </div>

            </div>
          </div>

        </section>
      ))}
    </div>
  )
}

export default AboutSec1
