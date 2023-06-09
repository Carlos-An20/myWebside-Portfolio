import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import swal from 'sweetalert';

export const Contact = () => {
  const form = useRef();

  const mostrarAlerta=()=>{
    swal("Mensaje enviado")
  }

  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",})


    const InputEvent = (event) => {
      const { name, value } = event.target
  
      setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        }
      })
    }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mm22je6", "template_mlwkbhc", form.current, "IXBTcXhiPO1c0kTLt")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <>
          <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='details'>
                  <h1>Carlos Andres Paredes Carranza </h1>
                  <p>Information Technology Engineer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +593 0984059877</p>
                  <p>Email: carlos.paredes23@hotmail.com</p> <br />

                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type="text" name="user_name" value={data.user_name} onChange={InputEvent} />
                  </div>

                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type="email" name="user_email" value={data.email} onChange={InputEvent} />
                </div>
      
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea name="message"  cols='30' rows='10'  value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button  onClick={()=>mostrarAlerta()}>
                   
                  <input type="submit" value="Send" className=' btn_shadow CV1' ></input>
                  
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  </>

  )
}

export default Contact