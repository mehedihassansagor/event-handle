import React from "react";
import "./ServiceCart.css";

const ServiceCart = ({ event }) => {
  // console.log(event.name);
  return (
    <div className="row bg-light ml-2" style={{ width: "430px" }}>
      <div className="col-md-6 ">
        <img
          src={event.imageURL}
          alt="..."
          ClassName="img-fluid image-style"
          style={{ height: "70%", width: "100%" }}
        />
      </div>
      <div className="col-md-6">
        <h5 className="text-center " style={{ color: "red" }}>
          {event.name}
        </h5>
        <p>{event.description}</p>
        <br />
        <br />
        <h6 style={{ color: "red" }}> ${event.price}</h6>
      </div>

      <a
        href="/dashboard"
        className="btn btn-primary mt-2 btn-style"
        type="button"
      >
        Book
      </a>
    </div>
  );
};

export default ServiceCart;
