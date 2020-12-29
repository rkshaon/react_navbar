import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return(
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
          <div className={`${showLinks?'links-container show-container':'links-container'}`}>
            <ul className="links">
              {links.map((link) => {
                const {id, url, text} = link;
                return <li kye={id}><a href={url}>{text}</a></li>
              })}
            </ul>
          </div>
        <ul className="social-icons">
          {social.map((socialItem)=>{
            const {id, url, icon} = socialItem;
            return(<li key={id}><a href={url}>{icon}</a></li>);
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
