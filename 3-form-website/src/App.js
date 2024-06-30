// App.js
import React, { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Reset errors when user starts typing again
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = { ...errors };

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only alphabets';
      formValid = false;
    }

    if (!/^[0-9]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number should contain only numbers';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <div className="App">
      <h2 className='website-title'>Form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          title='Name'
          type='text'
          value={formData.name}
          placeholder='Enter your name..'
          handleChange={handleChange}
          error={errors.name}
        />
        <FormInput 
          title='Email'
          type='email'
          value={formData.email}
          placeholder='Enter your email..'
          handleChange={handleChange}
          error={errors.email}
        />
        <FormInput 
          title='Phone Number'
          type='text'
          value={formData.phoneNumber}
          placeholder='Enter your phone number..'
          handleChange={handleChange}
          error={errors.phoneNumber}
        />
        <FormInput 
          title='Age'
          type='text'
          value={formData.age}
          placeholder='Enter your age..'
          handleChange={handleChange}
          error={errors.age}
        />
        <FormInput 
          title='Password'
          type='password'
          value={formData.password}
          placeholder='Enter your password..'
          handleChange={handleChange}
          error={errors.password}
        />
        <FormInput 
          title='Confirm Password'
          type='password'
          value={formData.confirmPassword}
          placeholder='Confirm Your Password..'
          handleChange={handleChange}
          error={errors.confirmPassword}
        />
        <button type="submit">
          Next
        </button>
      </form>
    </div>
  );
}

export default App;
