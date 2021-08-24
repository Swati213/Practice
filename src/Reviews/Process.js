import React, { useState } from 'react'
import "./Style.css";
import data from './Data';
import {  FaQuoteRight } from 'react-icons/fa';

const Process = () => {
    const[value,setValue]=useState(0);
    const{name,job,image,text}=data[value];
      const checkNumber=(number)=>{
       if(number>data.length-1){
           return 0;
       }
       if(number<0){
           return data.length-1;
       }
       return number;
      };
      const prevBtn=()=>{
         setValue((value)=>{
          let dataVl=value-1;
          return checkNumber(dataVl);
         })
      }
      const nextBtn=()=>{
        setValue((value)=>{
            let dataVl=value+1;
            return checkNumber(dataVl);
           })
      }
const randomBtn=()=>{
   let randomNo=Math.floor(Math.random() * data.length);
   if(randomNo === value){
       randomNo = value + 1;
   }
   setValue(checkNumber(randomNo));
};
    return (
        <div>
          <article className='review'>
          <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
           <span className='quote-icon'>
               <FaQuoteRight/>
           </span>
          
          </div>
          <h3 className='author'>{name}</h3>
           <p className='job'>{job}</p>
           <p className='info'>{text}</p>
           <div className='button-container'>
           <button className='prev-btn' onClick={prevBtn}>
           Prev
           </button>
           <button className='next-btn' onClick={nextBtn}>
               Next
           </button>

           </div>
           <button className='random-btn' onClick={randomBtn}>
               Random Surprise
           </button>
          </article>

           
        </div>
    )
}

export default Process
