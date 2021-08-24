import React from 'react'
import "./Styke.css";

import Tour from './Tour';
const Tours = ({tours,removeBtn}) => {
    return (
        <div>
           <section>
               <div className='title'>
                   <h4>Ours Tours</h4>
                   <div className='underline'></div>
               </div>
               {tours.map((tour)=>{
                   return<Tour key={tour.id}{...tour} removeBtn={removeBtn}/>
               })}
           </section> 
        </div>
    )
}

export default Tours
