import React from 'react';

const Select = ({ value, handleChange, children }) =>
  <select value={value} onChange={event => handleChange(event.target.value)}>
    {children}
  </select>

export default Select;
