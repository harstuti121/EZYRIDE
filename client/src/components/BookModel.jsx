import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/BookStyles/BookModel.css";

const BookModel = () => {
  const location = useLocation();
  const { imgSrc, price, title, description } = location.state || {};

  const [formData, setFormData] = useState({
    b_location: title || "",
    c_no: "",
    d_no: "",
    v_insurance: "",
    b_date: "",
    b_time: "",
    b_pay: "",
    b_return_date: "",
    b_return_time: "",
    b_pickup: title || ""
  });

  const [totalPrice, setTotalPrice] = useState(price); // Track total price with possible extra charge

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      b_pickup: formData.b_location,
    }));
  }, [formData.b_location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "b_location" && { b_pickup: value })
    });
  };

  const handlePayLater = () => {
    setTotalPrice(prevPrice => prevPrice + 50); // Add ₹50 extra for Pay Later option
  };

  const handleSubmit = async (e, isPayLater) => {
    e.preventDefault();
    try {
      const finalPrice = isPayLater ? totalPrice + 50 : totalPrice;
      const response = await fetch("https://your-api-endpoint.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          imgSrc,
          price: finalPrice,
          title,
          description,
        }),
      });
      if (response.ok) {
        alert("Booking confirmed!");
      } else {
        alert("Error submitting booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="booking-modal active-modal">
      <div className="booking-modal__content">
        <h2 className="book-title-1">Complete Reservation for {title}</h2>
        <img src={imgSrc} alt={title} className="booking-image" />
        <p className="booking-description">{description}</p>
        <h3>Price: ₹{totalPrice}</h3>

        <form onSubmit={(e) => handleSubmit(e, false)} className="booking-form">
          {/* Form fields */}
          <div className="megh-1">
            <label>Booking Location</label>
            <input 
              type="text" 
              name="b_location" 
              value={formData.b_location} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="megh-1">
            <label>Contact Number</label>
            <input type="tel" name="c_no" value={formData.c_no} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Driver Number</label>
            <input type="text" name="d_no" value={formData.d_no} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Vehicle Insurance</label>
            <input type="text" name="v_insurance" value={formData.v_insurance} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Booking Date</label>
            <input type="date" name="b_date" value={formData.b_date} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Booking Time</label>
            <input type="time" name="b_time" value={formData.b_time} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Payment Method</label>
            <select name="b_pay" value={formData.b_pay} onChange={handleChange} required>
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <div className="megh-1">
            <label>Return Date</label>
            <input type="date" name="b_return_date" value={formData.b_return_date} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Return Time</label>
            <input type="time" name="b_return_time" value={formData.b_return_time} onChange={handleChange} required />
          </div>
          <div className="megh-1">
            <label>Pick-Up Location</label>
            <input 
              type="text" 
              name="b_pickup" 
              value={formData.b_pickup} 
              onChange={handleChange} 
              required 
              readOnly 
            />
          </div>

          {/* Payment Buttons */}
          <div className="megh-pay">
          <button type="submit" className="submit-button">Pay Now</button>
          <button 
            type="button" 
            className="submit-button pay-later-button" 
          >
            Pay Later (₹50 Extra)
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModel;
