import React, { useState } from "react";
import data from "./Data";
import "./Style.css";
const Paragraph = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setVal(data.slice(0,amount));
  };

  return (
    <div>
      <section className="section-center">
        <h3>How much Paragraph you want????</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">Submit count</button>
        </form>
        <article className="lorem-text">
          {val.map((item,index)=>{
             return <p key={index}>{item}</p>
          })}

        </article>
      </section>
    </div>
  );
};

export default Paragraph;
