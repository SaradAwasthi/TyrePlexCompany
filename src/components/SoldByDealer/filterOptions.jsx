import React from 'react';

const FilterOption = ({ value, brandName, onClick }) => {
  return (
    <div className="filter-option absolute top-0  bg-white z-10 p-5 shadow-lg scroll-my-11" onClick={onClick}>
      {brandName}
    </div>
  );
};

export default FilterOption;
