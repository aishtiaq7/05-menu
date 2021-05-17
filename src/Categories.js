import React from "react";

const Categories = ({ filterCategory }) => {
  // console.log(filterCategory('breakfast'));

  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          filterCategory("breakfast");
        }}
      >
        Breakfast
      </button>
    </div>
  );
};

export default Categories;
