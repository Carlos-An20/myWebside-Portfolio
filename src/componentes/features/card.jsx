import React from 'react'

/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
<a href='/'>
<i class="fas fa-arrow-right"> 
    <FontAwesomeIcon icon={faArrowRight}/>
</i>                        
</a>
*/
const Cards = (props) => {
    return (
      <>
        <div className='box btn_shadow'>
          <img src={props.image} alt='' />
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          

    </div> 
    </> 
    
  )
}

export default Cards