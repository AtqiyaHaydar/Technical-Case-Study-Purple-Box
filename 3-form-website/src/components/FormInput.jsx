// FormInput.js
import React from 'react';

const FormInput = ({ title, type, value, placeholder, handleChange, error }) => {
  return (
    <div className='form-item'>
      <p className='form-title'>{title}</p>
      <input 
        className='form-input'
        type={type}
        value={value} // Pastikan nilai value diambil dari props
        placeholder={placeholder}
        onChange={handleChange} // Menangani perubahan dengan fungsi handleChange dari props
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormInput;
