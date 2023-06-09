import React from "react";
import logo from "../imagenes/logo3.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
        <div className='img'>
            <img src={logo} alt='' />
          </div>
          <p>©2023. All rights reserved by El Huron.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer