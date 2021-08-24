import React, { useEffect, useState } from 'react'
import "./Styke.css";
import Tours from './Tours';
import Load from './Load';
const url = 'https://course-api.com/react-tours-project'

const Travel = () => {
    const [load,setLoad]=useState(true);
    const [tours,setTours]=useState([]);
    const removeBtn=(id)=>{
       const newTravel=tours.filter((tour)=>tour.id!==id)
       setTours(newTravel);
       
    }
    const fetchData=async()=>{
        setLoad(true);
        try{
        const response=await fetch(url);
        const tours=await response.json();
        setLoad(false);
        setTours(tours)
        }
        catch(error){
           setLoad(false);
           console.log(error);

        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(load){
        return(
            <main>
                <Load/>
            </main>
        )
    }
   if(tours.length===0){
       return(
           <main>
               <div className='title'>
                   <h4>No Tours Left</h4>
                   <button className='btn' onClick={()=>fetchData()}></button>
               </div>
           </main>
       )
   }
    return (
        <div>

           <main>
               <Tours tours={tours} removeBtn={removeBtn}/>
           </main> 
        </div>
    )
}

export default Travel
