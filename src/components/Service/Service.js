import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import "./Service.css";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service.name]);
  return (
    <div className="gird mt-4 ">
      {
        service.map((event) => (
          <ServiceCart event={event}></ServiceCart>
        ))
      }
    </div>
  );
};

export default Service;
