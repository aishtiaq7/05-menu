import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const [catagories, setCatagories] = useState([]);

  const filterCategory = (category) =>{
    console.log('clicked on filterCategory with ' + category);
    const newMenu = items.filter( item =>{
      return item.category === category 
    })
    setMenu(newMenu);
  }

  // console.log( filterCategory('breakfast') );

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        <div className="underline"></div> 
        </div>
        <Categories filterCategory={filterCategory}/>
        <Menu key={new Date().getTime().toString()} menuItems={menu} />
      </section>
    </main>
  );
}

export default App;
