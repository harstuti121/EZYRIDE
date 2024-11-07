import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import bigInt from 'big-integer';
import { useNavigate } from 'react-router-dom';

// Create context
const viewContext = createContext();
const useViewContext = () => useContext(viewContext);

// Custom hook to use the context for the Customer Login
const ViewProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    c_no: '',
    c_password: '',
  });

  const [errors, setErrors] = useState({});
  const [mess, setmess] = useState("MEGHANA");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3001/customer_login', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
        setmess(response.data.mess);
        navigate('/');
        setuserName(response.data.user.name);
        console.log(mess) 
      } catch (error) {
        if (error.response) {
          setmess(error.response.data.mess || 'An error occurred. Please try again.');
        } else {
          console.log('An error occurred. Please try again.');
          setmess('An error occurred. Please try again.');
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  
// Custom hook to use the context for the SEARCH A VEHICLE

  // Search data state
  const [searchData, setSearchData] = useState({
    vehicleType: '',
  });

  // State to hold the fetched vehicle data
  const [VehicleData, setVehicleData] = useState([]);
  const [Message, setMessage] = useState(''); // State for error Messageages, if any

  // Handle input change for search
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch data and store it in VehicleData
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/vehicles`, {
        params: { type: searchData },
      });
      console.log('Search Results:', response.data);

      // Store the fetched data in VehicleData
      setVehicleData(response.data);
      setMessage(''); // Clear any previous error Messageages

      // Navigate to the Models page with the fetched data
      navigate('/models');
    } catch (error) {
      console.log('Error fetching vehicles:', error);
      setMessage('An error occurred while searching. Please try again.');
    }
  };

  const allValue = { 
    handleSubmit,
    handleInputChange,
    formData,
    errors,
    userName,
    mess,
    searchData,
    handleSearchChange,
    handleSearch,
    VehicleData, // Expose VehicleData to be used in components like Models
    Message,
  }; 

  // const allValue = { handleSubmit,handleInputChange,formData,errors,userName,mess};

  return (
    <viewContext.Provider value={allValue}>
      {children}
    </viewContext.Provider>
  );
};

export { ViewProvider, viewContext, useViewContext };
