import axios from 'axios';
import bigInt from 'big-integer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const RegCustomer = () => {
  const [formData, setFormData] = useState({
  c_no: '',   // Rename this to match the backend column
  c_name: '',
  c_aadhar: '',
  c_lic_no: '',
  c_DOB: '',
  c_state: '',
  c_city: '',
  c_street: '',
  c_pin: '',
  c_email: '',
  c_gender: '',
  c_password: '',
});


  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // const [alreadyCustomer, setAlreadyCustomer] = useState(false);
  const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//   const { name, value } = e.target;

//   if (name === 'c_no') {
//     // Convert contactNo to BigInt
//     setFormData({ ...formData, [name]: bigInt(value) });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }
// };

const handleInputChange = (e) => {
  const { name, value } = e.target;

  // Logic for Aadhaar number input
  if (name === 'c_aadhar') {
    const regex = /^\d{0,12}$/; // Allow only numbers, up to 16 digits
    if (regex.test(value)) {
      setFormData({ ...formData, [name]: value });

      // Set error based on length
      if (value.length === 12) {
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'Aadhaar number must be 12 digits long.' });
      }
    } else {
      setErrors({ ...errors, [name]: 'Only numeric values are allowed.' });
    }
  }

  // Logic for Pin input
  else if (name === 'c_pin') {
    const regex = /^\d{0,6}$/; // Allow only numbers, up to 6 digits
    if (regex.test(value)) {
      setFormData({ ...formData, [name]: value });

      // Set error based on length
      if (value.length === 6) {
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'Pin must be exactly 6 digits long.' });
      }
    } else {
      setErrors({ ...errors, [name]: 'Only numeric values are allowed.' });
    }
  }

  // Logic for contact number input
  else if (name === 'c_no') {
    // Ensure the value is numeric
    const regex = /^\d{0,10}$/;
    if (regex.test(value)) {
      // Convert contactNo to BigInt (if you want to store it as BigInt)
      setFormData({ ...formData, [name]: bigInt(value) });
      setErrors({ ...errors, [name]: '' }); // Reset error if valid
      // Set error based on length
      if (value.length === 6) {
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'Must be exactly 10 digits long.' });
      }
    } else {
      setErrors({ ...errors, [name]: 'Only numeric values are allowed.' });
    }
  }
  
  else if (name === 'c_lic_no') {
    // Ensure the length is exactly 10 characters
    if (value.length <= 16) {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Reset error if valid

      // Set error if the length is not exactly 16
      if (value.length === 16) {
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'License number must be exactly 16 characters long.' });
      }
    } else {
      // Set error if the input exceeds 16 characters
      setErrors({ ...errors, [name]: 'License number cannot exceed 16 characters.' });
    }
}

  // For other inputs
  else {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset error for other fields
  }
};


  const validateForm = () => {
    let tempErrors = {};
  if (!formData.c_no || isNaN(formData.c_no)) tempErrors.c_no = 'Contact No. is required and should be a valid number';
    if (!formData.c_name) tempErrors.c_name = 'Name is required';
    if (!formData.c_aadhar) tempErrors.c_aadhar = 'Adhar No. is required';
    if (!formData.c_lic_no) tempErrors.c_lic_no = 'License No. is required';
    if (!formData.c_DOB) tempErrors.c_DOB= 'Date of Birth is required';
    if (!formData.c_state) tempErrors.c_state = 'State is required';
    if (!formData.c_city) tempErrors.c_city = 'City is required';
    if (!formData.c_street) tempErrors.c_street = 'Street is required';
    if (!formData.c_pin) tempErrors.c_pin = 'Pin is required';
    if (!formData.c_email) tempErrors.c_email = 'Email is required';
    if (!formData.c_gender) tempErrors.c_gender = 'Gender is required';
    if (!formData.c_password) tempErrors.c_password = 'Password is required';
    // if (formData.password !== formData.confirmPassword)
    //   tempErrors.confirmPassword = 'Passwords do not match';
    // setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validateForm()) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3001/customer_register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
        // setMessage(response.data.message);
        console.log(response.data.message);
        navigate('/main_customer');
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

  return (
    <div
      style={{
        // marginTop: '120px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          marginTop: '120px',
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          backgroundColor: '#fff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Registration Form */}
        <div
          style={{
            width: '100%',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#750E21',
            }}
          >
            Register as Customer
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            {/* <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_no"
                placeholder="Contact No."
                value={formData.c_no}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.contactNo && <p style={{ color: 'red' }}>{errors.contactNo}</p>}
            </div> */}

            {/* Contact No. */}
            <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  name="c_no"
                  placeholder="Contact No."
                  value={formData.c_no}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none',
                    marginBottom: '10px',
                  }}
                  required
                />
                {errors.c_no && <p style={{ color: 'red' }}>{errors.c_no}</p>}
              </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_name"
                placeholder="Name"
                value={formData.c_name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_name && <p style={{ color: 'red' }}>{errors.c_name}</p>}
            </div>

            {/* Adhar No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_aadhar"
                placeholder="Adhar No."
                value={formData.c_aadhar}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_aadhar && <p style={{ color: 'red' }}>{errors.c_aadhar}</p>}
            </div>

            {/* License No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_lic_no"
                placeholder="License No."
                value={formData.c_lic_no}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_lic_no && <p style={{ color: 'red' }}>{errors.c_lic_no}</p>}
            </div>

            {/* Date of Birth */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="date"
                name="c_DOB"
                value={formData.c_DOB}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_DOB && <p style={{ color: 'red' }}>{errors.c_DOB}</p>}
            </div>

            {/* Gender */}
            <div style={{ marginBottom: '16px' }}>
              <select
                type='text'
                name="c_gender"
                value={formData.c_gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
              {errors.c_gender && <p style={{ color: 'red' }}>{errors.c_gender}</p>}
            </div>

            {/* Address Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_state"
                placeholder="State"
                value={formData.c_state}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_state && <p style={{ color: 'red' }}>{errors.c_state}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_city"
                placeholder="City"
                value={formData.c_city}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_city && <p style={{ color: 'red' }}>{errors.c_city}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_street"
                placeholder="Street"
                value={formData.c_street}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_street && <p style={{ color: 'red' }}>{errors.c_street}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_pin"
                placeholder="Pin"
                value={formData.c_pin}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_pin && <p style={{ color: 'red' }}>{errors.pin}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="c_email"
                placeholder="Email"
                value={formData.c_email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              {errors.c_email && <p style={{ color: 'red' }}>{errors.c_email}</p>}
            </div>

            {/* Password */}
  
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="c_password"
                placeholder="Password"
                value={formData.c_password}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
                required
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {passwordVisible ? '🙈' : '👁'}
              </span>
              {errors.c_password  && <p style={{ color: 'red' }}>{errors.c_password }</p>}
            </div>

             {/* Confirm Password
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }} 
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {confirmPasswordVisible ? '🙈' : '👁'}
              </span>
              {errors.confirmPassword && (
                <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
              )}
            </div> */}

            <button
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#750E21',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Register
            </button>

            <div style={{ marginTop: '20px'}}>
              <p>Already a customer?</p>
              <Link to="/main_customer" style={{ color: '#750E21' }}>
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegCustomer;