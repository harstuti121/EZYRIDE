import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

function BookCar() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState("");
  const [color, setColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");
  const [price, setPrice] = useState("");
  const [driverRequired, setDriverRequired] = useState(false);

  const navigate = useNavigate();

  const carOptions = {
    Car: ["Audi A1 S-Line", "VW Golf 6", "Toyota Camry", "BMW 320 ModernLine", "Mercedes-Benz GLK", "VW Passat CC"],
    Scooty: ["Honda Activa", "TVS Jupiter", "Hero Maestro", "Suzuki Access"],
    Bike: ["Yamaha R15", "Kawasaki Ninja", "Bajaj Pulsar", "Royal Enfield Classic"]
  };

  const handleChange = (e, setter) => setter(e.target.value);

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setVehicleType(selectedType);
    setCarType("");
    setCarImg(""); // Reset car image when vehicle type changes
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-motorcycle"></i> &nbsp; Select Vehicle Type <b>*</b></label>
                  <select value={vehicleType} onChange={handleVehicleTypeChange}>
                    <option>Vehicle type</option>
                    <option value="Car">Car</option>
                    <option value="Scooty">Scooty</option>
                    <option value="Bike">Bike</option>
                  </select>
                </div>
                
                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-car"></i> &nbsp; Select Vehicle Preference <b>*</b></label>
                  <select value={carType} onChange={handleCarTypeChange} disabled={!vehicleType}>
                    <option>Select</option>
                    {vehicleType && carOptions[vehicleType].map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-palette"></i> &nbsp; Color <b>*</b></label>
                  <select value={color} onChange={(e) => handleChange(e, setColor)}>
                    <option>Select car color</option>
                    <option>Any Color</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-dollar-sign"></i> &nbsp; Price Range <b>*</b></label>
                  <select value={priceRange} onChange={(e) => handleChange(e, setPriceRange)}>
                    <option>Select price range</option>
                    <option value="Below $50">Below $50</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$100 - $150">$100 - $150</option>
                    <option value="Above $150">Above $150</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up <b>*</b></label>
                  <select value={pickUp} onChange={(e) => handleChange(e, setPickUp)}>
                    <option>Select pick up location</option>
                    <option>MANIT</option>
                    <option>MP NAGAR</option>
                    <option>INDRAPURI</option>
                    <option>KOLAR</option>
                    <option>ARERA HILLS</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off <b>*</b></label>
                  <select value={dropOff} onChange={(e) => handleChange(e, setDropOff)}>
                    <option>Select drop off location</option>
                    <option>MANIT</option>
                    <option>MP NAGAR</option>
                    <option>INDRAPURI</option>
                    <option>KOLAR</option>
                    <option>ARERA HILLS</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="pickdate"><i className="fa-regular fa-calendar-days"></i> &nbsp; Pick-up <b>*</b></label>
                  <input id="pickdate" value={pickDate} onChange={(e) => handleChange(e, setPickDate)} type="date" />
                  <input id="picktime" value={pickTime} onChange={(e) => handleChange(e, setPickTime)} type="time" />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="dropdate"><i className="fa-regular fa-calendar-days"></i> &nbsp; Drop-off <b>*</b></label>
                  <input id="dropdate" value={dropDate} onChange={(e) => handleChange(e, setDropDate)} type="date" />
                  <input id="droptime" value={dropTime} onChange={(e) => handleChange(e, setDropTime)} type="time" />
                </div>

                <div className="box-form__car-type">
                  <label><i className="fa-solid fa-dollar-sign"></i> &nbsp; Required Driver <b>*</b></label>
                  <select value={priceRange} onChange={(e) => handleChange(e, setPriceRange)}>
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <button className="form-btn" onClick={openModal}>SEARCH</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
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
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{pickDate}
                    {/* <input type="time" className="input-time"></input> */}
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
                    {dropTime} /{dropDate}
                    {/* <input type="time" className="input-time"></input> */}
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
        {/* Additional info */}
        <div className="booking-modal__person-info">
          <h4>Additional Information</h4>
          <form className="info-form">

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Required Driver</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;


