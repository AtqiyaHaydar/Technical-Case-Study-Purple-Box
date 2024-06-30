// App.js
import React, { useState } from 'react';
import '../App.css';
import FormInput from '../components/FormInput';

function HomePage() {
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
    
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formValid = false;
    }
    
    if (!/^\d+$/.test(formData.age)) {
      newErrors.age = 'Age should contain only numbers';
      formValid = false;
    }
    
    const age = parseInt(formData.age);
    if (age < 18 || age > 100) {
      newErrors.age = 'Age should be between 18 and 100';
      formValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters long';
      formValid = false;
    }
    
    if (!/[a-z]/.test(formData.password) || !/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password should contain both lowercase and uppercase letters';
      formValid = false;
    }
    
    if (!/\d/.test(formData.password)) {
      newErrors.password = 'Password should contain at least one digit';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <div className="App">
      <h2 className='website-title'>A Website Form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='name'
          title='Name'
          type='text'
          value={formData.name}
          placeholder='Enter your name..'
          handleChange={handleChange}
          error={errors.name}
        />
        <FormInput  
          name='email'
          title='Email'
          type='email'
          value={formData.email}
          placeholder='Enter your email..'
          handleChange={handleChange}
          error={errors.email}
        />
        <FormInput 
          name='phoneNumber'
          title='Phone Number'
          type='text'
          value={formData.phoneNumber}
          placeholder='Enter your phone number..'
          handleChange={handleChange}
          error={errors.phoneNumber}
        />
        <FormInput 
          name='age'
          title='Age'
          type='text'
          value={formData.age}
          placeholder='Enter your age..'
          handleChange={handleChange}
          error={errors.age}
        />
        <FormInput 
          name='password'
          title='Password'
          type='password'
          value={formData.password}
          placeholder='Enter your password..'
          handleChange={handleChange}
          error={errors.password}
        />
        <FormInput 
          name='confirmPassword'
          title='Confirm Password'
          type='password'
          value={formData.confirmPassword}
          placeholder='Confirm Your Password..'
          handleChange={handleChange}
          error={errors.confirmPassword}
        />
        <button type="submit" className='form-button'>
          Next
        </button>
      </form>
    </div>
  );
}

export default HomePage;
