import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import FormDataPage from './pages/FormDataPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form-data" element={<FormDataPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
