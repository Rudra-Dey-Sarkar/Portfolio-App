import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import "./MainSec1.css";
import axios from "axios";
function MainSec1() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/get-main-datas").then((response) => {
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
      {
        datas.map((e, index) => (
          <section key={index} className='main-sec1'>
            <div className='intro-texts'>
              <p className='intro-heading'>{e.sec1.main_text1}</p>
              <div id='type'>
                <p>I'm a </p>
                <Typewriter
                  options={{
                    strings: ['Software Developer', 'CGI Artist', 'Video Editor', 'Gamer', 'Athlete'],
                    autoStart: true,
                    loop: true,
                  }} />
              </div>
              <p>{e.sec1.intro_text1}</p>
              <div className='btns'>
                <a href={e.sec1.pdf_link} download={e.sec1.pdf_name}>
                  <button id='download-btns'>Download CV</button>
                </a>
                <Link to="/projects" id='projects-btns'>Projects</Link>
              </div>
            </div>
            <img src={e.sec1.pics.pic1} alt={e.sec1.main_text1} />
          </section>

        ))
      }
    </div>
  );
}

export default MainSec1