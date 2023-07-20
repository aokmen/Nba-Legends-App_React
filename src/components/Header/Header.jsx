import React from 'react'
import image from "./../../assets/nba-logo.png";



const Header = () => {
  return (
    <div className="header">
        <img src={image} alt="" />
        <h1>NBA Legends</h1>
       
    </div>
  )
}

export default Header