import React from 'react';
import PropTypes from 'prop-types';
import './SelectField.css'; 

const SelectField = ({ options, value, onChange, placeholder }) => {
  // Filter out duplicate options based on the label
  const uniqueOptions = Array.from(new Set(options.map(option => option.label)))
    .map(label => {
      return options.find(option => option.label === label);
    });

  return (
    <div className="select-field">
      <select value={value} onChange={onChange} aria-label={placeholder}>
        <option value="" disabled>{placeholder}</option>
        {uniqueOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SelectField.defaultProps = {
  value: '',
  placeholder: 'Select an option',
};

export default SelectField;
