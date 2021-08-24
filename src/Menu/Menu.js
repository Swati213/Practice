import React from 'react'
import "./Style.css";

const Menu = ({items}) => {
    return (
        <div>
            <div className="section-center">
            {
              items.map((menuData)=>{
                  const {id, title, img, desc, price}=menuData;
                  return(
                      <article key={id} className='menu-item'>
                          <img src={img} alt={title}  className="photo"/>
                          <div className='item-info'>
                              <header>
                                  <h4>{title}</h4>
                                  <h4 className='price'>${price}</h4>
                              </header>
                              <p className='item-text'>{desc}</p>
                          </div>
                      </article>
                  )
              })
            }
            </div>
        </div>
    )
}

export default Menu
