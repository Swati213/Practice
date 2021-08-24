import React, { useState } from "react";
import "./Style.css"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <article className="question">
        <hearder>
          <h4>{title}</h4>
          <button className='btn ' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />  }
          </button>
        </hearder>
        {showInfo && <p>{info}</p>}
      </article>
    </div>
  );
};

export default Question;
