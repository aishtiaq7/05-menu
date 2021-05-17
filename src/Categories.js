import React from "react";

const Categories = ({ filterCategory, allCategories }) => {
  const handleOnClick = (category) =>{
    console.log(category);
    filterCategory(category);
  }

  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button type="button" className="filter-btn" key={index} onClick={() =>handleOnClick(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
