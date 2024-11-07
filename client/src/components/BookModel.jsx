// BookModel.jsx
import React from "react";
import "./BookModel.css"; // Make sure to style the component with relevant CSS

const BookModel = ({
  modal,
  openModal,
  pickTime,
  pickDate,
  dropTime,
  dropDate,
  pickUp,
  dropOff,
  vehicleType,
  carType,
  imgUrl,
  confirmBooking,
}) => {
  return (
    <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
      {/* Title */}
      <div className="booking-modal__title">
        <h2>Complete Reservation</h2>
        <i onClick={openModal} className="fa-solid fa-xmark"></i>
      </div>

      {/* Message */}
      <div className="booking-modal__message">
        <h4>
          <i className="fa-solid fa-circle-info"></i> Upon completing this
          reservation enquiry, you will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>

      {/* Car Info */}
      <div className="booking-modal__car-info">
        <div className="dates-div">
          <div className="booking-modal__car-info__dates">
            <h5>Location & Date</h5>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Pick-Up Date & Time</h6>
                <p>
                  {pickTime} / {pickDate}
                </p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Drop-Off Date & Time</h6>
                <p>
                  {dropTime} / {dropDate}
                </p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h6>Pick-Up Location</h6>
                <p>{pickUp}</p>
              </div>
            </span>
          </div>

          <div className="booking-modal__car-info__dates">
            <span>
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h6>Drop-Off Location</h6>
                <p>{dropOff}</p>
              </div>
            </span>
          </div>
        </div>

        <div className="booking-modal__car-info__model">
          <h5>
            <span>Vehicle Type -</span> {vehicleType}
          </h5>
          <h5>
            <span>{vehicleType} -</span> {carType}
          </h5>
          {imgUrl && <img src={imgUrl} alt="car_img" />}
        </div>
      </div>

      {/* Additional Info */}
      <div className="booking-modal__person-info">
        <h4>Additional Information</h4>
        <form className="info-form">
          <span className="info-form__checkbox">
            <input type="checkbox" />
            <p>Required Driver</p>
          </span>
          <div className="reserve-button">
            <button type="button" onClick={confirmBooking}>
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModel;
