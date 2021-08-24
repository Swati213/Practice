import React from "react";
import "./style.css";
const List = ({ data }) => {
  return (
    <>
      {data.map((curele) => {
        const {id, name, age, image } = curele;
        return (
          <div>
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{age}years</p>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default List;
