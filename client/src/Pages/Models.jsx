import React from 'react';
import "../styles/Vehicles/vehicles.css";
import { useViewContext } from '../Context_api/contextApi';
import Navbar from '../components/Navbar';
import InfoModal from '../components/InfoModal';


const Models = () => {
  const { vehicle,handleBookNowClick,handleMore,close } = useViewContext(); // Access context values
  return (
    <>
    {/* <Navbar/> */}
    <section className="section" id="popular">
    <h1 className='megh-title'>YOUR VEHICLES</h1>
      {/* <HeroPages name="Vehicle Models" /> */}
      <div className="container">
        {/* Display filtered vehicles */}
        <div className="popular__container swiper">
          <div className="swiper-wrapper">
            {vehicle.map((property) => (
              <article className="popular__card swiper-slide">
                <img className="popular__img" src={property.v_image} alt={property.v_name} />
                <div className="popular__data">
                   <h2 className="popular__price"><span>Rs </span>{property.v_pay}</h2>
                   <h1 className="popular__title">{property.v_name}</h1>
                   <p className="popular__description">{property.o_street}</p>
                   <div className="popular__buttons">
                     <button className="popular__button book" onClick={() => handleBookNowClick(property.v_insurance)}>Book Now</button>
                     <button className="popular__button more" onClick={() => handleMore(property.v_insurance)}>More</button>
                ,  </div> 
                </div>
              </article>))}
          </div>
        </div>
      </div>
    </section>
    {
      close&&(
        <InfoModal/>
      )
    }
    </>
  );
};

export default Models;