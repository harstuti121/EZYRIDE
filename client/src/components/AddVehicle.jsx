import React, { useState, useEffect } from 'react';
import "../styles/Vehicles/vehicles.css";

function AddVehicle({ addVehicle }) {
  const [newVehicle, setNewVehicle] = useState({
    v_image: '',
    v_insurance: '',
    v_name: '',
    v_type: '',
    v_rto: '',
    v_color: '',
    v_mileage: '',
    v_engine_type: '',
    v_pay: '',
    v_desp: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0 && newVehicle.v_image) {
      setErrors((prevErrors) => ({ ...prevErrors, v_image: '' }));
    }
  }, [newVehicle.v_image, errors]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewVehicle({ ...newVehicle, v_image: reader.result });
        };
        reader.readAsDataURL(file);
      } else {
        setErrors({ ...errors, v_image: 'Please upload a valid image file.' });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'v_insurance') {
      const regex = /^\d{0,10}$/;
      if (regex.test(value)) {
        setNewVehicle({ ...newVehicle, [name]: value });
        setErrors({
          ...errors,
          [name]: value.length === 10 ? '' : 'Insurance number must be 10 digits long.',
        });
      } else {
        setErrors({ ...errors, [name]: 'Only numeric values are allowed.' });
      }
    } else if (name === 'v_rto') {
      const regex = /^[a-zA-Z0-9]{0,15}$/;
      if (regex.test(value)) {
        setNewVehicle({ ...newVehicle, [name]: value });
        setErrors({
          ...errors,
          [name]: value.length >= 8 && value.length <= 15 ? '' : 'RTO must be between 8 and 15 characters.',
        });
      } else {
        setErrors({ ...errors, [name]: 'Only alphanumeric values are allowed.' });
      }
    } else {
      setNewVehicle({ ...newVehicle, [name]: value });
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (!newVehicle.v_insurance || newVehicle.v_insurance.length !== 10) {
      tempErrors.v_insurance = 'Insurance number must be 10 digits long.';
    }
    if (!newVehicle.v_rto || newVehicle.v_rto.length < 8 || newVehicle.v_rto.length > 15) {
      tempErrors.v_rto = 'RTO must be between 8 and 15 characters.';
    }
    if (!newVehicle.v_name) tempErrors.v_name = 'Vehicle name is required';
    if (!newVehicle.v_type || newVehicle.v_type === 'Select') tempErrors.v_type = 'Vehicle type is required';
    if (!newVehicle.v_pay) tempErrors.v_pay = 'Payment information is required';
    if (!newVehicle.v_desp) tempErrors.v_desp = 'Description is required';

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      addVehicle(newVehicle);
      setNewVehicle({
        v_image: '',
        v_insurance: '',
        v_name: '',
        v_type: '',
        v_color: '',
        v_mileage: '',
        v_engine_type: '',
        v_rto: '',
        v_pay: '',
        v_desp: '',
      });
      setErrors({});
    }
  };

  return (
    <form className="add-property-form" onSubmit={handleAddVehicle}>
      <h1 className="add-titlee">Add New Vehicle</h1>
      <input
        className="megh-1"
        type="file"
        accept="image/*"
        name="v_image"
        onChange={handleFileChange}
        required
      />
      {errors.v_image && <span className="error" aria-live="assertive">{errors.v_image}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_insurance"
        placeholder="Insurance Number"
        value={newVehicle.v_insurance}
        onChange={handleInputChange}
      />
      {errors.v_insurance && <span className="error">{errors.v_insurance}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_name"
        placeholder="Vehicle Name"
        value={newVehicle.v_name}
        onChange={handleInputChange}
      />
      {errors.v_name && <span className="error">{errors.v_name}</span>}

      <select
        className="megh-1"
        name="v_type"
        value={newVehicle.v_type}
        onChange={handleInputChange}
      >
        <option value="Select">Select</option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Scooty">Scooty</option>
      </select>
      {errors.v_type && <span className="error">{errors.v_type}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_rto"
        placeholder="RTO"
        value={newVehicle.v_rto}
        onChange={handleInputChange}
      />
      {errors.v_rto && <span className="error">{errors.v_rto}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_color"
        placeholder="Color"
        value={newVehicle.v_color}
        onChange={handleInputChange}
      />
      {errors.v_color && <span className="error">{errors.v_color}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_mileage"
        placeholder="Mileage"
        value={newVehicle.v_mileage}
        onChange={handleInputChange}
      />
      {errors.v_mileage && <span className="error">{errors.v_mileage}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_engine_type"
        placeholder="Engine Type"
        value={newVehicle.v_engine_type}
        onChange={handleInputChange}
      />
      {errors.v_engine_type && <span className="error">{errors.v_engine_type}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_pay"
        placeholder="Payment"
        value={newVehicle.v_pay}
        onChange={handleInputChange}
      />
      {errors.v_pay && <span className="error">{errors.v_pay}</span>}

      <input
        className="megh-1"
        type="text"
        name="v_desp"
        placeholder="Description"
        value={newVehicle.v_desp}
        onChange={handleInputChange}
      />
      {errors.v_desp && <span className="error">{errors.v_desp}</span>}

      <button className="btn button" type="submit">
        Add Vehicle
      </button>
    </form>
  );
}

export default AddVehicle;
