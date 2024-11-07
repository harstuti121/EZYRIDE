import React from "react";
import amit from "../images/ourteam/amitmondal.jpg";
import anchal from "../images/ourteam/anchalk.jpg";
import anurag from "../images/ourteam/anu.jpg";
import Footer from "../components/Footer.jsx"; 
import HeroPages from '../components/HeroPages';
import "../styles/ourteam/ourteam.css";

function OurTeam() {
    let message = "Our team is a blend of visionaries, innovators, and passionate individuals committed to transforming the way you experience mobility with EZYRIDE.";
    return (
        <section className="section-white">
            <HeroPages name="Our Team" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            Meet the Minds Behind EZYRIDE
                        </h2>
                        <p className="section-subtitle">{message}</p>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="team-item" alt="pic">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img" />
                            <h3>Meghana tamrakar</h3>
                            <div className="team-info">
                                <p>Head of ceo</p>
                            </div>
                            <p>Meghna Tamrakar: As a 2nd year MCA student at MANIT Bhopal, Meghna brings a wealth of knowledge and creativity to the EZYRIDE team. Her passion for technology drives our innovative solutions.</p>
                            <ul className="team-icon">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="github"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="team-item" alt="pic">
                            <img src={anchal} alt="anchal" className="team-img" />
                            <h3>Anchal Kumari</h3>
                            <div className="team-info">
                                <p>Head of ceo</p>
                            </div>
                            <p>Anchal Kumari: Anchal,2nd year of MCA at MANIT Bhopal, is known for her attention to detail and innovative ideas. She plays a pivotal role in shaping EZYRIDE’s vision.</p>
                            <ul className="team-icon">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="github"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="team-item" alt="pic">
                            <img src={amit} alt="Amit" className="team-img" />
                            <h3>Amit Mondal</h3>
                            <div className="team-info">
                                <p>Head of ceo</p>
                            </div>
                            <p>Amit Mondal: Amit, a 2nd year MCA student from MANIT Bhopal, 
                                His dedication to excellence ensures that EZYRIDE is always on the cutting edge</p>
                            <ul className="team-icon">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/Mondal71" className="github"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="team-item" alt="pic">
                            <img src={anurag} className="team-img" />
                            <h3>anurag sharma</h3>
                            <div className="team-info">
                                <p>Head of ceo</p>
                            </div>
                            <p>Anurag Sharma: As a 2nd year MCA student at MANIT Bhopal, Anurag's enthusiasm for technology and teamwork make him an invaluable asset to the EZYRIDE team.</p>
                            <ul className="team-icon">
                                <li><a href="https://x.com/AnuragS95281180" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/anuragsharma5259" className="github"><i className="fa fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/anuragsharma5259" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/anuragsharma5259/" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="team-item" alt="pic">
                            <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img" />
                            <h3>harstuti</h3>
                            <div className="team-info">
                                <p>Head of ceo</p>
                            </div>
                            <p>Harstuti: Harstuti is a 2nd year MCA student from MANIT Bhopal who excels in both leadership and technical skills. Her contributions are vital to the success of EZYRIDE.</p>
                            <ul className="team-icon">
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="github"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
            <Footer /> 
        </section>
    );
}

export default OurTeam;