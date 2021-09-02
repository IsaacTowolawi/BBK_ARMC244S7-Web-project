import React from 'react'

import {Link} from "react-router-dom"
// the link tag is to show navigational links on the website/UI.

export const Navbar = () => {
    return (
       <header>
           <div className="container">
               <div className="inner-content">
                   <div className="logo">
                       <Link to="/"><img src="/imgs/Studio_Ghibli_logo.png" alt="" width="200" /></Link>
                       {/* this will be sendinf the user to the home page */}
                   </div>
                   <ul className="nav-links">
                       <li>
                           <Link to="/"> Home</Link>
                       </li>
                       <li>
                           <Link to="/about"> Testimonials</Link>
                       </li>
                       <li>
                           <Link to="/forms"> Sign-Up</Link>
                       </li>
                       <li>
                           <Link to="/animebase" className="btn">
                               +Search </Link>
                       </li>
                   </ul>
               </div>
           </div>
       </header>
    )
}
