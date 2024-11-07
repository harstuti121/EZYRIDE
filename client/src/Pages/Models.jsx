import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroPages from '../components/HeroPages';
import AddVehicle from '../components/AddVehicle';
import "../styles/Vehicles/vehicles.css";
import { useViewContext } from '../Context_api/contextApi';

const VehiclCardComp = ({ imgSrc, price, title, description }) => {
  const isRegistered = true;
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    if (isRegistered) {
      navigate('/bookModel', {
        state: {
          imgSrc,
          price,
          title,
          description,
        },
      });
    } else {
      navigate("/custRegister");
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
  const { VehicleData } = useViewContext(); // Access context values
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // // Fetch data from backend
  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     try {
  //       const response = await axios.get('/api/vehicles');
  //       setItems(response.data); // Assumes API returns an array of vehicle objects
  //     } catch (error) {
  //       console.error("Error fetching vehicles:", error);
  //     }
  //   };
  //   fetchVehicles();
  // }, []);

  // const handleAddVehicle = (newVehicle) => {
  //   setItems((prevItems) => [...prevItems, newVehicle]);
  // };

  // const handleCategoryChange = (newCategory) => {
  //   if (newCategory === 'Add New Vehicle') {
  //     navigate('/AddVehicle');
  //   } else {
  //     setCategory(newCategory);
  //   }
  // };

  // const filteredItems = category === 'All'
  //   ? items
  //   : items.filter(item => item.type === category);

  return (
    <section className="section" id="popular">
      <HeroPages name="Vehicle Models" />
      <div className="container">
        {/* Category Buttons */}
        {/* <div className="category-buttons">
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
        </div> */}

        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {VehicleData.map((property, index) => (
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

        {/* Add New Vehicle Form
        {category === 'Add New Vehicle' && (
          <AddVehicle addVehicle={handleAddVehicle} />
        )} */}
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
