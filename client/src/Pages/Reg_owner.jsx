// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const RegOwner = () => {
//   const [formData, setFormData] = useState({
//     contactNo: '',
//     name: '',
//     adharNo: '',
//     licenseNo: '',
//     dob: '',
//     state: '',
//     city: '',
//     street: '',
//     pin: '',
//     email: '',
//     gender: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [alreadyCustomer, setAlreadyCustomer] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.contactNo) tempErrors.contactNo = 'Contact No. is required';
//     if (!formData.name) tempErrors.name = 'Name is required';
//     if (!formData.adharNo) tempErrors.adharNo = 'Adhar No. is required';
//     if (!formData.licenseNo) tempErrors.licenseNo = 'License No. is required';
//     if (!formData.dob) tempErrors.dob = 'Date of Birth is required';
//     if (!formData.state) tempErrors.state = 'State is required';
//     if (!formData.city) tempErrors.city = 'City is required';
//     if (!formData.street) tempErrors.street = 'Street is required';
//     if (!formData.pin) tempErrors.pin = 'Pin is required';
//     if (!formData.email) tempErrors.email = 'Email is required';
//     if (!formData.gender) tempErrors.gender = 'Gender is required';
//     if (!formData.password) tempErrors.password = 'Password is required';
//     if (formData.password !== formData.confirmPassword)
//       tempErrors.confirmPassword = 'Passwords do not match';
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Submit form or handle registration logic
//       console.log('Form Submitted', formData);
//     }
//   };

//   return (
//     <div
//       style={{
//         // marginTop: '120px',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f3f3f3',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       <div
//         style={{
//           marginTop: '120px',
//           width: '100%',
//           maxWidth: '1100px',
//           display: 'flex',
//           backgroundColor: '#fff',
//           boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
//           borderRadius: '10px',
//           overflow: 'hidden',
//         }}
//       >
//         {/* Registration Form */}
//         <div
//           style={{
//             width: '100%',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <h2
//             style={{
//               fontSize: '2rem',
//               fontWeight: 'bold',
//               marginBottom: '20px',
//               color: '#750E21',
//             }}
//           >
//             Register as Owner
//           </h2>
//           <form onSubmit={handleSubmit}>
//             {/* Form Fields */}
//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="contactNo"
//                 placeholder="Contact No."
//                 value={formData.contactNo}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.contactNo && <p style={{ color: 'red' }}>{errors.contactNo}</p>}
//             </div>

//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//             </div>

//             {/* Adhar No. */}
//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="adharNo"
//                 placeholder="Adhar No."
//                 value={formData.adharNo}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.adharNo && <p style={{ color: 'red' }}>{errors.adharNo}</p>}
//             </div>

//             {/* Date of Birth */}
//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}
//             </div>

//             {/* Gender */}
//             <div style={{ marginBottom: '16px' }}>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
//             </div>

//             {/* Address Fields */}
//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
//             </div>

//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
//             </div>

//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="street"
//                 placeholder="Street"
//                 value={formData.street}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
//             </div>

//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="text"
//                 name="pin"
//                 placeholder="Pin"
//                 value={formData.pin}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.pin && <p style={{ color: 'red' }}>{errors.pin}</p>}
//             </div>

//             {/* Email */}
//             <div style={{ marginBottom: '16px' }}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//             </div>

//             {/* Password */}
  
//             <div style={{ marginBottom: '16px', position: 'relative' }}>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               <span
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '15px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {passwordVisible ? '🙈' : '👁️'}
//               </span>
//               {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div style={{ marginBottom: '16px', position: 'relative' }}>
//               <input
//                 type={confirmPasswordVisible ? 'text' : 'password'}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   outline: 'none',
//                   marginBottom: '10px',
//                 }}
//               />
//               <span
//                 onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   top: '15px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {confirmPasswordVisible ? '🙈' : '👁️'}
//               </span>
//               {errors.confirmPassword && (
//                 <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               style={{
//                 padding: '12px 20px',
//                 backgroundColor: '#750E21',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//               }}
//             >
//               Register
//             </button>

//             <div style={{ marginTop: '20px'}}>
//               <p>Already a customer?</p>
//               <Link to="/main_owner" style={{ color: '#750E21' }}>
//                 Login here
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegOwner;

import axios from 'axios';
import bigInt from 'big-integer';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const RegOwner = () => {
  const [formData, setFormData] = useState({
    o_no: '',
    o_name: '',
    o_aadhar: '',
    o_DOB: '',
    o_state: '',
    o_city: '',
    o_street: '',
    o_pin: '',
    o_email: '',
    o_gender: '',
    o_password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [alreadyCustomer, setAlreadyCustomer] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Logic for Aadhaar number input
    if (name === 'o_aadhar') {
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
    else if (name === 'o_pin') {
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
    else if (name === 'o_no') {
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
  
    // For other inputs
    else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Reset error for other fields
    }
  };
  

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.o_no) tempErrors.o_no = 'Contact No. is required';
    if (!formData.o_name) tempErrors.o_name = 'Name is required';
    if (!formData.o_aadhar) tempErrors.o_aadhar = 'Adhar No. is required';
    if (!formData.o_DOB) tempErrors.o_DOB = 'Date of Birth is required';
    if (!formData.o_state) tempErrors.o_state = 'State is required';
    if (!formData.o_city) tempErrors.o_city = 'City is required';
    if (!formData.o_street) tempErrors.o_street = 'Street is required';
    if (!formData.o_pin) tempErrors.o_pin = 'Pin is required';
    if (!formData.o_email) tempErrors.o_email = 'Email is required';
    if (!formData.o_gender) tempErrors.o_gender = 'Gender is required';
    if (!formData.o_password) tempErrors.o_password = 'Password is required';
    return Object.keys(tempErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validation logic
    let isValid = true;
    const newErrors = {};
  
    const validationErrors = validateForm();
    if (validationErrors) {
      try {
        console.log('Form Data:', formData);
        const response = await axios.post('http://localhost:3001/owner_register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
        // setMessage(response.data.message);
        console.log(response.data.message);
        navigate('/main_owner');
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
      console.log(formData)
      setErrors(validationErrors);
    }

    setErrors(newErrors);
    // If the form is valid, proceed with the registration logic
    if (isValid) {
      // Submit the form data
      console.log("Form submitted successfully:", formData);
      // Add your form submission logic here (e.g., API call)
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
            Register as Owner
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            {/* Contact No. */}
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="text"
                  name="o_no"
                  placeholder="Contact No."
                  value={formData.o_no}
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
                {errors.o_no && <p style={{ color: 'red' }}>{errors.o_no}</p>}
              </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_name"
                placeholder="Name"
                value={formData.o_name}
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
              {errors.o_name && <p style={{ color: 'red' }}>{errors.o_name}</p>}
            </div>

            {/* Adhar No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_aadhar"
                placeholder="Adhar No."
                value={formData.o_aadhar}
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
              {errors.o_aadhar && <p style={{ color: 'red' }}>{errors.o_aadhar}</p>}
            </div>

            {/* Date of Birth */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="date"
                name="o_DOB"
                value={formData.o_DOB}
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
              {errors.o_DOB && <p style={{ color: 'red' }}>{errors.o_DOB}</p>}
            </div>

            {/* Gender */}
            <div style={{ marginBottom: '16px' }}>
              <select
                type="text"
                name="o_gender"
                value={formData.o_gender}
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
              {errors.o_gender && <p style={{ color: 'red' }}>{errors.o_gender}</p>}
            </div>

            {/* Address Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_state"
                placeholder="State"
                value={formData.o_state}
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
              {errors.o_state && <p style={{ color: 'red' }}>{errors.o_state}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_city"
                placeholder="City"
                value={formData.o_city}
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
              {errors.o_city && <p style={{ color: 'red' }}>{errors.o_city}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_street"
                placeholder="Street"
                value={formData.o_street}
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
              {errors.o_street && <p style={{ color: 'red' }}>{errors.o_street}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="o_pin"
                placeholder="Pin"
                value={formData.o_pin}
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
              {errors.o_pin && <p style={{ color: 'red' }}>{errors.o_pin}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email"
                name="o_email"
                placeholder="Email"
                value={formData.o_email}
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
              {errors.o_email && <p style={{ color: 'red' }}>{errors.o_email}</p>}
            </div>

            {/* Password */}
  
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type="text"
                name="o_password"
                placeholder="Password"
                value={formData.o_password}
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
              {errors.o_password && <p style={{ color: 'red' }}>{errors.o_password}</p>}
            </div>

            Confirm Password
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
            </div>

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
              <Link to="/main_owner" style={{ color: '#750E21' }}>
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegOwner;