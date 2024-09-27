import React, { useEffect, useState } from 'react'
import "./ProjectSec1.css"
import { Link } from 'react-router-dom'
import axios from "axios"

function ProjectSec1() {
 
    const [datas, setDatas] = useState([]);

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
        {datas.map((e, index)=>(
        <section key={index} className='project-sec1'>
            <p className='projects-mt'>{e.sec1.main_text1}</p>
            {e.sec1.projects.map((sec1_e, sec1_i)=>(
            <div key={sec1_i} className='project'>
                <p className='p-mt'>{sec1_e.p_name}</p>
                <Link to={sec1_e.link}><img src={sec1_e.p_pics.pic1} alt="" className='p-img' /></Link>
                <p className='p-abt'>{sec1_e.p_details}</p>
            </div>
            ))}
        </section>
        ))}
        </div>
    )
}

export default ProjectSec1
