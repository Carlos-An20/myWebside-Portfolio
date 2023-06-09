import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';


import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {
    const [modal, setModal] = useState(false)
  
    const toggleModal = () => {
      setModal(!modal)
    }
  
    if (modal) {
      document.body.classList.add("active-modal")
    } else {
      document.body.classList.remove("active-modal")
    }
    return (
      <>
        <div className='box btn_shadow '>
          <div className='img'>
            <img src={props.image} alt='' onClick={toggleModal} />
          </div>
          <div className='category d_flex'>
            <span onClick={toggleModal}>{props.category}</span>

          </div>
          <div className='title'>
            <h2 onClick={toggleModal}>{props.title}</h2>
            <a href='#popup' className='arrow' onClick={toggleModal}>
              <i class='fas fa-arrow-right'><FontAwesomeIcon icon={faArrowRight}/></i>
            </a>
          </div>
        </div>
  
        {/* Popup box */}
        {modal && (
          <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content d_flex'>
              <div className='modal-img left'>
                <img src={props.image} alt='' />
              </div>
              <div className='modal-text right'>
                <span>Featured - Design</span>
                <h1>{props.title}</h1>
                <p>{props.texto}</p>

                <div className='button f_flex mtop'>
                  <button className='btn_shadow CV1'>
                    <a href={props.link}>
                    VIEW PROJECT
                    </a>
                   
                  </button>
                </div>
                <button className='close-modal btn_shadow' onClick={toggleModal}>
                  <i> <FontAwesomeIcon icon={faCircleXmark} /></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  
  export default Card