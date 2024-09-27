import React, { useEffect, useState } from 'react'
import "./MainSec2.css"
import axios from "axios"
import { SoftwareDeveloper, Gamer, Athlete  } from '../../Icons/Icons';
function MainSec2() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://portfolio-app-backend-five.vercel.app/get-main-datas").then((response) => {
        setDatas(response.data);

      }).catch((err) => {
        console.log("data not fetched due to :-", err);
      })
    } catch (error) {
      console.log("request to fetch the data not send due to", error);
    }
  }, [])

  return(
    <div>
      {datas.map((e, index)=>(
      <section key={index} className='main-sec2'>
        <div className='about-texts'>
          <div className='intro-name'><p>I'm</p><p>Rudra</p></div>
          <div className='software-developer'><p>a Software<SoftwareDeveloper/>Developer</p></div>
          <p className='gamer'> a Passionate <Gamer/> Gamer</p>
          <p className='gamer'> a Passionate <Athlete/> Athlete</p>
        </div>
        <img src={e.sec2.pics.pic1}></img>
      </section>
      ))}
    </div>
  )
}
export default MainSec2
