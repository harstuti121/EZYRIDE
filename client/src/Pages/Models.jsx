import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import BikeImg1 from "../images/bike/bike1.jpeg"; 
import ScootyImg1 from "../images/Scooty/scooty1.jpeg"; 
import "../styles/Vehicles/vehicles.css";
import HeroPages from '../components/HeroPages';
import AddVehicle from '../components/AddVehicle'; // Import AddVehicle component
const isRegistered = true;
const VehiclCardComp = ({ imgSrc, price, title, description }) => {
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    if (isRegistered) {
      // Redirect to BookModel page
      navigate("/BookModel");
    } else {
      // Redirect to CustomerRegister page
      navigate("/RegCustomer");
    }
  };
  return (
    <article className="popular__card swiper-slide">
      <img className="popular__img" src={imgSrc} alt={title} />
      <div className="popular__data">
        <h2 className="popular__price">
          <span>$</span>{price}
        </h2> 
        <h1 className="popular__title">{title}</h1>
        <p className="popular__description">{description}</p>
        <div className="popular__buttons">
        <button className="popular__button book" onClick={handleBookNowClick}>
            Book Now
          </button>
          <button className="popular__button more">More</button>
        </div>
      </div>
    </article>
  );
};

const Models = () => {
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const [items, setItems] = useState([
    { imgSrc: CarImg1, price: '66,356', title: 'Indrapuri, Bhopal', description: 'Audi Car', type: 'Car' },
    { imgSrc: CarImg2, price: '35,159', title: 'MP Nagar, Bhopal', description: 'Golf6 Car', type: 'Car' },
    { imgSrc: CarImg3, price: '75,043', title: 'Arera Hills, Bhopal', description: 'Toyota Car', type: 'Car' },
    { imgSrc: CarImg4, price: '62,024', title: 'Kolar , Bhopal', description: 'BMW Car', type: 'Car' },
    { imgSrc: CarImg5, price: '47,043', title: 'Awadh Nagar, Bhopal', description: 'Benz Car', type: 'Car' },
    { imgSrc: BikeImg1, price: '15,000', title: 'TT Nagar, Bhopal', description: 'Bike', type: 'Bike' },
    { imgSrc: ScootyImg1, price: '10,000', title: 'Piplani, Bhopal', description: 'Scooty', type: 'Scooty' }
  ]);

  const handleAddVehicle = (newVehicle) => {
    setItems((prevItems) => [...prevItems, newVehicle]);
  };

  const handleCategoryChange = (newCategory) => {
    if (newCategory === 'Add New Vehicle') {
      navigate('/AddVehicle');
    } else {
      setCategory(newCategory);
    }
  };

  const filteredItems = category === 'All'
    ? items
    : items.filter(item => item.type === category);

  return (
    <section className="section" id="popular">
      <HeroPages name="Vehicle Models" />
      <div className="container">
        {/* Category Buttons */}
        <div className="category-buttons">
          <button
            onClick={() => handleCategoryChange('All')}
            className={category === 'All' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('Car')}
            className={category === 'Car' ? 'active' : ''}
          >
            Car
          </button>
          <button
            onClick={() => handleCategoryChange('Bike')}
            className={category === 'Bike' ? 'active' : ''}
          >
            Bike
          </button>
          <button
            onClick={() => handleCategoryChange('Scooty')}
            className={category === 'Scooty' ? 'active' : ''}
          >
            Scooty
          </button>
          <button
            onClick={() => handleCategoryChange('Add New Vehicle')}
            className={category === 'Add New Vehicle' ? 'active' : ''}
          >
            Add New Vehicle
          </button>
        </div>

        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {filteredItems.map((property, index) => (
              <VehiclCardComp
                key={index}
                imgSrc={property.imgSrc}
                price={property.price}
                title={property.title}
                description={property.description}
              />
            ))}
          </div>
        </div>

        {/* Add New Vehicle Form */}
        {category === 'Add New Vehicle' && (
          <AddVehicle addVehicle={handleAddVehicle} />
        )}
      </div>
    </section>
  );
};

export default Models;




        {/* Form to add a new vehicle */}
        {/* <div className="add-property-form">
          <h1 className='add-titlee'>Add New Vehicle</h1>
          <input
            className="megh-1"
            type="file"
            accept="image/*"
            name="imgSrc"
            onChange={handleFileChange}
          />
          <input
            className="megh-1"
            type="text"
            name="price"
            placeholder="Price"
            value={newProperty.price}
            onChange={handleInputChange}
          />
          <input
            className="megh-1"
            type="text"
            name="title"
            placeholder="Title"
            value={newProperty.title}
            onChange={handleInputChange}
          />
          <input
            className="megh-1"
            type="text"
            name="description"
            placeholder="Description"
            value={newProperty.description}
            onChange={handleInputChange}
          />
          <select
            className="megh-1"
            name="type"
            value={newProperty.type}
            onChange={handleInputChange}
          >
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Scooty">Scooty</option>
          </select>
          <a href="#" className="btn button" onClick={addProperty}>
            Add Vehicle
          </a>
        </div> */}
