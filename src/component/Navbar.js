import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
    const myFunction = (e) => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
   
    return (
        <div class="mobile-container">
            <div class="topnav">
                <Link to="/" class="logo">Ola cabs<i style={{marginLeft:"1rem"}} class="fa fa-solid fa-taxi"></i></Link>
                <div id="myLinks">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/service">OUR SERVICES</Link>
                    <Link to="/whychooseus">WHY CHOOSE US</Link>

                   
                </div>
                <Link to="#" class="icon" onClick={myFunction}>
                    <i class="fa fa-bars"></i>
                </Link>
            </div>
        </div>
    )
}
