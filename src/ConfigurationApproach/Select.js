import React from 'react';

const Select = ({ value, options, handleChange }) =>
  <select value={value} onChange={event => handleChange(event.target.value)}>
    {options.map(option =>
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    )}
  </select>

export default Select;