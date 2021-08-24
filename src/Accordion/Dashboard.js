import React, { useState } from 'react'
import Data  from "./Data"
import Question from './Question'
import "./Style.css"
const Dashboard = () => {
    const [questions,setQuestions]=useState(Data)
    return (
        <div>
            <main>
                <div className='container'>
                <h3>Questions and answers about a login</h3>
                <section className='info'>
                 {questions.map((question)=>{
                   return(
                       <Question key={question.id} {...question}/>
                   )
                 })} 
                </section>
                  
                </div>
            </main>
        </div>
    )
}

export default Dashboard
