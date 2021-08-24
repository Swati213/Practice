import React,{useState} from 'react'
import "./Styke.css";

const Tour = ({id,name,info,image,price,removeBtn}) => {
    const[readmore,SetReadmore]=useState(false);
    return (
        <div>
           <article className='single-tour'>
           <img src={image} alt={name} />
           <footer>
               <div className='tour-info'>
                   <h4>{name}</h4>
                   <h4 className='price-tag'>{price}</h4>
               </div>
               <p>
                   {readmore?info:`${info.substring(0,200)}.....`}
                   <button onClick={()=>SetReadmore(!readmore)}>
                       {readmore?'read less':'read more'}
                   </button>
               </p>
               <button className='delete-btn' onClick={()=>removeBtn(id)}>
                   Not Interested
               </button>
           </footer>

           </article> 
        </div>
    )
}

export default Tour
