import React, { useState } from 'react';
import './FilterDropdown.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import SelectField from '../../re-usable-components/SelectField';

const FilterDropdown = ({ products, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onFilterChange(selectedValue); 
    setIsOpen(false);
  };

  const options = products.map((product) => ({
    value: product?.BrandsData?.name,
    label: product?.BrandsData?.name,
  }));

  return (
    <div className="filter-dropdown">
      <button
        type="button"
        className="border w-32 h-10 rounded-md d-flex justify-content-between align-items-center"
        style={{ paddingLeft: 'revert' }}
        onClick={handleDropdownToggle}
      >
        {selectedOption || 'Filter By'}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      {isOpen && (
        <div className="dropdown-options border shadow-md mt-2">
          <SelectField
            options={options}
            value={selectedOption}
            onChange={handleOptionSelect}
            placeholder="Select a brand"
          />
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
