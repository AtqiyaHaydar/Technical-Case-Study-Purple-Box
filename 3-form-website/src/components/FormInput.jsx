// FormInput.js
import React from 'react';

const FormInput = ({ name, title, type, value, placeholder, handleChange, error }) => {
  return (
    <div className='form-item'>
      <p className='form-title'>{title}</p>
      <input 
        name={name}
        className='form-input'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormInput;
