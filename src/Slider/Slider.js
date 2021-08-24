import React, { useState ,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import "./Style.css";
import data from './Data';

const Slider = () => {
    const [value,setValue]=useState(data);
    const[index,setIndex]=useState(0);
    useEffect(() => {
        const lastIndex = value.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, value]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    
    return (
        <div>
        <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
        </div>
        <div className="section-center">

        {value.map((value, valueIndex) => {
          const { id, image, name, title, quote } =value;

          let position = 'nextSlide';
          if (valueIndex === index) {
            position = 'activeSlide';
          }
          if (
            valueIndex === index - 1 ||
            (index === 0 && valueIndex === value.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>

      </div>
      </section>
        </div>
    )
}

export default Slider
