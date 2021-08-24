import React, { useState } from 'react'
import Text from './Text';
import List from './List';
import "./style.css";



const Birthday = () => {
    const [data,setData]=useState(Text);
    return (
        <>
         <main>
         <section className="container">
        
         <h3>{data.length} BIRTHDAY TODAY</h3>
         <List  data={data}/>
         <button onClick={()=>setData([])}>Clear all</button>
         </section> 
         </main>

        </>
    )
}

export default Birthday
