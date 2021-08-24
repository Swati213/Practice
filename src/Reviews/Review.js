import React from 'react'
import Process from './Process';
import "./Style.css";

const Review = () => {
    return (
        <div>
        <main>          
        <section className='container'>
          <div className='title'>
              <h2 >Our Reviews</h2>
              <div className='underline'></div>
              </div>
              <Process/>
          </section> 
          </main>
 
        </div>
    )
}

export default Review
