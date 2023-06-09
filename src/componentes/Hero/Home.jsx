import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram, faLinkedinIn,faWhatsapp}  from '@fortawesome/free-brands-svg-icons'


import hero from "../imagenes/2.jpg"
import skill1 from "../imagenes/Python.svg.png";
import skill2 from "../imagenes/jav.png";
import skill3 from "../imagenes/c.png";
import skill4 from "../imagenes/ard.png";
import skill5 from "../imagenes/css.png";
import skill6 from "../imagenes/html.png";
import skill7 from "../imagenes/sql.png";
import skill8 from "../imagenes/r.png";
import skill9 from "../imagenes/ts.png";
import skill10 from "../imagenes/sass.png";
/*import skill11 from "../imagenes/psh.png";*/
import pdf from "../imagenes/CV.pdf"


const Home = () => {
  return (
    <>
    <section className='hero' id='home'>
       <div className='container f_flex top'>
            <div className='left top'>
                <h3> 
                    WELCOME TO MY SELF
                </h3>
                <h1>
                    Hi, I'm <span> Carlos Paredes</span>
                </h1>
                <h2>
                    a
                    <span>
                        <Typewriter
                            words={[' IT Engineer', ' Developer']} loop cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
                            />
                    </span>
                </h2>
                <div className='CV'>
                    <button className='CV1 btn_shadow'>
                    <a href= {pdf} download>
                    Download CV
                    </a>
                    </button>

                </div>
                <p>I am a newly graduated programmer, I have a good experience in programming. During my time as a student, I developed projects related to software development. I've always been the type of person to take your downsides and turn them into upsides, so I'm a firm believer that there's always a way to overcome every obstacle.</p>            <div className='hero_btn d_flex'>



                <div className='hero_btn d_flex'>   
                    <div className='col_1'>
                        <h4> FIND WITH ME</h4>
                        <div className='button1'>
                            <button className='btn_shadow'>
                                 <a href='https://www.instagram.com/andres_walls_/?hl=es-la'>
                                    <i>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </i> 
                                 </a>
                                                                             
                           </button>
                            <button className='btn_shadow'>
                                <a href='http://wa.me/5930984508977'>
                                    <i>      
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </i>
                                </a>
                                
                            </button>

                            <button className='btn_shadow'>
                                <a href='https://www.linkedin.com/in/carlos-paredes-4b1871259/'>
                                    <i>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </i>

                                </a>
                                            
                            </button>

                            <button className='btn_shadow'>
                                <a href='https://github.com/Carlos-An20?tab=repositories'>
                                    <i>
                                    <FontAwesomeIcon icon={faGithub} />                                      
                                    </i> 
                                </a>
               
                            </button>

                        </div>

                    </div>


                    <div className='col_2'>
                        <h4>BEST SKILL ON</h4>
                        <div className='button2'>
                        <button className='btn_shadow'>
                            <img src={skill1} alt=''/>
                        </button>

                        <button className='btn_shadow'>
                             <img src={skill2} alt=''/>
                        </button>
                                        
                                        <button className='btn_shadow'>
                                            <img src={skill3} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill4} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill5} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill6} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill7} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill8} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill9} alt=''/>
                                        </button>
                                        <button className='btn_shadow'>
                                            <img src={skill10} alt=''/>
                                        </button>

                        </div>
                        </div>
                    </div>
                </div>  
            </div>
        

            <div className='right'>
                <div className='right_img'>
                    <img src={hero} alt='' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home