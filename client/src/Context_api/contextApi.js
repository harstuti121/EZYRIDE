import React, { createContext, useContext, useState,useEffect } from 'react';
import axios from 'axios';
import bigInt from 'big-integer';
import { useNavigate } from 'react-router-dom';
// Create context
const viewContext = createContext();

// Custom hook to use the context
const useViewContext = () => useContext(viewContext);

const ViewProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    c_no: '',
    c_password: '',
  });

  const [errors, setErrors] = useState({});
  const [userName, setuserName] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

  if (name === 'contact') {
    // Convert contactNo to BigInt
    setFormData({ ...formData, [name]: bigInt(value) });
  } else {
    setFormData({ ...formData, [name]: value });
  }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.c_no) newErrors.c_no = 'Contact is required';
    if (!formData.c_password) newErrors.c_password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validateForm()) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3001/customer_login', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
        // setMessage(response.data.message);
        console.log(response.data.message);
        navigate('/');
        setuserName(response.data.user.name);
        console.log(response.data.message) // You might want to save this token in localStorage or context
        // localStorage.setItem('token', response.data.token);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const allValue = { handleSubmit,handleInputChange,formData,errors,userName};

  return (
    <viewContext.Provider value={allValue}>
      {children}
    </viewContext.Provider>
  );
};

export { ViewProvider, viewContext, useViewContext };
