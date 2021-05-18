import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

var allCategories = items.map( item =>{
  return item.category;
})
allCategories = [ 'all',...new Set(allCategories),];

function App() {
  const [menu, setMenu] = useState(items);
  const [catagories, setCatagories] = useState(allCategories);

  const filterCategory = (category) =>{
    console.log('\tfilterCategory with ' + category);
    if ( category ==='all'){
      setMenu(items);
      return;
    }
    
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
          <h2>New Change</h2>
        <div className="underline"></div> 
        </div>
        <Categories filterCategory={filterCategory} allCategories={allCategories}/>
        <Menu key={new Date().getTime().toString()} menuItems={menu} />
      </section>
    </main>
  );
}

export default App;
