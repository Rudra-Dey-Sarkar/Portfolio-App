import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function myFunction(nav, setNav) {
    document.getElementById("container").classList.toggle("change");
    if (nav === false) {
        document.getElementById("nav-opt").style.display = "grid";
        setNav(true);
    } else {
        document.getElementById("nav-opt").style.display = "none";
        setNav(false);
    }
}

function Navbar() {
    const [nav, setNav] = useState(false);

    useEffect(()=>{
        if(window.location.pathname==="/"){
          document.querySelector(".main-opt").classList.add("active");
          document.querySelector(".about-opt").classList.remove("active");
          document.querySelector(".project-opt").classList.remove("active");
        }else if(window.location.pathname==="/about"){
            document.querySelector(".about-opt").classList.add("active");
            document.querySelector(".main-opt").classList.remove("active");
            document.querySelector(".project-opt").classList.remove("active");   
        }else{
            document.querySelector(".project-opt").classList.add("active");   
            document.querySelector(".about-opt").classList.remove("active");
            document.querySelector(".main-opt").classList.remove("active");
        }
    },[window.location.pathname])


    return (
        <div className='nav-body'>
            <Link to="/" style={{textDecoration:"none"}}><p id='logo'>Rudra</p></Link>

            <div id='nav-opt'>
                <Link to="/" className='main-opt'>Main</Link>
                <Link to="/about" className='about-opt'>About</Link>
                <Link to="/projects" className='project-opt'>Projects</Link>
            </div>

            <div id="container" onClick={() => myFunction(nav, setNav)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}

export default Navbar
