import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
// import PeopleData from '../People/PeopleData'
import Slider from "../Slider/Slider";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className=" container">
        <Header />
        <div className="mt-3">
          <Slider />
        </div>
        <Service />
      </div>
      <div className="contact-style">
          <Contact />
        </div>
      <div className="footer-style">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
