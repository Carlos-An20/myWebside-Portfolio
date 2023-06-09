import React from 'react';
import Card from './Card';
import "./Porfolio.css";
import Portfolio_data from './Porfolio_data';

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.imagen} category={value.category}  title={value.title} texto={value.texto} link={value.link} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio