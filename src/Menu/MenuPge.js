import React, { useState } from 'react'
import Categories from './Categories';
import items from "./Data";
import Menu from './Menu';
import "./Style.css";
const allCategories = ['all',...new Set(items.map((item) => item.category))];

const MenuPge = () => {
    const[menuData,setMenuData]=useState(items);
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
        if (category === 'all') {
          setMenuData(items);
          return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuData(newItems);
      };
    
    return (
        <div>
            <section className='menu section'>
            <div className='title' >        
               <h2 >Our Menu</h2>
             <div className="underline"></div>
             </div>
             <Categories categories={categories} filterItems={filterItems}/>
              <Menu items={menuData}/>
            </section>
        </div>
    )
}

export default MenuPge
