import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCart.css";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCart = ({ event }) => {
  // console.log(event.name);
  const { _id } = event;
  return (
    <div>
      <div className="card container shadow p-3 mb-5 bg-body rounded">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src={event.imageURL}
            className="img-fluid"
            alt="..."
            style={{ height: "250px", width: "100%" }}
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{event.name}</h5>
          <p class="card-text">{event.description}</p>
          <h5>${event.price}</h5>
          <br />
          <Link
            to={`/dashboard/${_id}`}
            href="/dashboard"
            className="btn btn-outline-success"
            type="button"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp; Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
