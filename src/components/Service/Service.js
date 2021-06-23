import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import "./Service.css";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>;
        }

        else setService(data);
      });
  }, [service.name]);
  return (
    <div className="gird mt-4 ">
      {
        service.map((event) => (
          <ServiceCart event={event}></ServiceCart>
        ))
        // service.map(event=> <li>{event.name}</li>)
      }
    </div>
  );
};

export default Service;
