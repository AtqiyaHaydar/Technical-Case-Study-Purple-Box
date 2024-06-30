import React from 'react'
import { useSelector } from 'react-redux';

const FormData = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className='form-data'>
      <h3 className='website-title'>Form Data</h3>
      <div className='form-data-card'>
        {Object.entries(formData).map(([key, value], index) => (
          <div key={index} className='form-data-item'>
            <span className='form-data-key'>{key} :</span>
            <span className='form-data-value'> {value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormData