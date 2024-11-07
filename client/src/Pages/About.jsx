import React from "react";
import AboutImage from "../images/about/newabt.webp"; // Update the path as necessary
import AboutImage2 from "../images/about/newabt2.jpg"; // New image path
import Icon1 from "../images/about/icon1.png"; // Update the path as necessary
import Icon2 from "../images/about/icon2.png"; // Update the path as necessary
import Icon3 from "../images/about/icon3.png"; // Update the path as necessary
import "../styles/About/AboutSection.css"; // Import the CSS file
import Footer from "../components/Footer";

const AboutSection = () => {
  return (
    <>
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            className="about-image"
            src={AboutImage2}
            alt="company-background"
          />
          <img
            className="about-image"
            src={AboutImage}
            alt="company-services"
          />
        </div>
        <div className="about-text">
          <h3>About Our Company</h3>
          <h2>Where Every Journey Begins</h2>
          <p>
            We are committed to providing reliable and innovative transportation
            solutions that cater to all your travel needs. Our dedication to
            quality and customer satisfaction ensures that every journey with us
            is safe, comfortable, and enjoyable.
          </p>

          {/* Why Choose Us Section */}
          <div className="about-why-choose">
            <h3>Why Choose Us</h3>
            <div className="about-icons">
              <div className="about-icon">
                <img src={Icon1} alt="service-icon" />
                <h4>Diverse Fleet</h4>
                <p>
                  Choose from a wide variety of car types suited for every
                  journey.
                </p>
              </div>
              <div className="about-icon">
                <img src={Icon2} alt="service-icon" />
                <h4>85+ Rental Locations</h4>
                <p>
                  Find us in multiple locations to make car rental convenient
                  for you.
                </p>
              </div>
              <div className="about-icon">
                <img src={Icon3} alt="service-icon" />
                <h4>Trusted Support</h4>
                <p>
                  Our support team and repair shops ensure you're always
                  covered.
                </p>
              </div>
            </div>
          </div>

          {/* App Features Section */}
          <div className="about-features">
            <h3>App Features</h3>
            <ul>
              <li>
                🚗 <b>Easy Booking</b> - Book your rides effortlessly in a few
                simple steps.
              </li>
              <li>
                📍 <b>Real-Time Tracking</b> - Track your driver and estimated
                arrival time.
              </li>
              <li>
                💳 <b>Secure Payments</b> - Multiple payment options for
                convenience and security.
              </li>
              <li>
                🌟 <b>Ratings & Reviews</b> - Rate your experience and read user
                feedback.
              </li>
              <li>
                🔔 <b>Instant Notifications</b> - Stay updated with ride status
                and promotions.
              </li>
            </ul>
          </div>

          {/* Helpful Guidelines Section */}
          <div className="about-guidelines">
            <h3>Helpful Guidelines</h3>
            <p>For a smooth experience, please follow these guidelines:</p>
            <ul>
              <li>Plan your booking ahead of time during peak hours.</li>
              <li>Make sure your contact information is up to date.</li>
              <li>Always check your ride details before confirming.</li>
              <li>Rate your driver after the trip to help us improve.</li>
              <li>Contact support in case of any issues or emergencies.</li>
            </ul>
          </div>

          {/* New Safety Guidelines Section */}
          <div className="about-safety-guidelines">
            <h3>Safety Guidelines</h3>
            <p>
              Your safety is our priority. Please keep these safety tips in
              mind:
            </p>
            <ul>
              <li>
                Wear your <b>seatbelt</b> or <b>helmet</b> at all times during
                the ride.
              </li>
              <li>
                Confirm driver and vehicle details before getting in the car.
              </li>
              <li>Avoid sharing personal information with drivers.</li>
              <li>
                Report any unsafe behavior to our support team immediately.
              </li>
              <li>
                Follow local health and safety guidelines to ensure a safe
                journey.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <Footer></Footer>
    </>
  );
};

export default AboutSection;
