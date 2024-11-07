import React from 'react';
import '../styles/Safety/Safety.css'; // Make sure to style it accordingly in CSS

const Safety = () => {
  return (
    <div className="safety-container">
      {/* Safety for All Section */}
      <section className="safety-for-all">
        <h2>Safety for all.</h2>
        <p>
          At Rapido, the well-being of our customers is above everything else. We are constantly in pursuit of enhancing our safety measures to ensure every Rapido ride is a pleasant and comfortable experience.
        </p>
        <div className="safety-images">
          <img src="../images/safety1.png" alt="Customer" className="safety-image" />
          <img src="image2.jpg" alt="Captain" className="safety-image" />
          <img src="image3.jpg" alt="Customer and Captain" className="safety-image" />
        </div>
      </section>

      {/* Covers Everyone Section */}
      <section className="covers-everyone">
        <h3>Covers Everyone</h3>
        <div className="safety-cards">
          <div className="card">
            <img src="customer.jpg" alt="For Customers" className="card-image" />
            <h4>For Customers</h4>
            <p>Every ride is tracked by Rapido, with access to granular latitudinal and longitudinal data.</p>
            <a href="#" className="know-more">Know More</a>
          </div>
          <div className="card">
            <img src="captain.jpg" alt="For Captains" className="card-image" />
            <h4>For Captains</h4>
            <p>From hiring to training to monitoring to ongoing checks, we take all necessary steps to ensure our Captains' safety.</p>
            <a href="#" className="know-more">Know More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
