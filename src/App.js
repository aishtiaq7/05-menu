import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const [catagories, setCatagories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <div className="underline"></div>
        <Categories/>
        <Menu key={new Date().getTime()} menuItems={items} />
      </section>
    </main>
  );
}

export default App;
