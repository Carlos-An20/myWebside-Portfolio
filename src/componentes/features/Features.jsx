import React from 'react';

import './Features.css'
import Cards from './card';

import data from './FeaturesApi';


const Features = () => {
  return (
    <>
        <section className='features top' id='servicios'>
            <div className='container'>
                <div className="heading">
                    <h4> Features</h4>
                    <h1>What I Do</h1>
                </div>
                <div className='content grid'>
                {data.map((val, index) => {
                    return <Cards key={index} image={val.image} title={val.title} desc={val.desc} />
                })}
                    
                </div>
                
                 
            </div>

        </section>
    </>
  )
}

export default Features