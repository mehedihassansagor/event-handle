import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar/Sidebar";

const ManageService = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://warm-lake-41078.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [services.name]);

  const deleteOrder = (id) => {
    fetch(`https://warm-lake-41078.herokuapp.com/serviceDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newOrder = services.filter((service) => service._id !== id);
          setService(newOrder);
          console.log(newOrder);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="row container">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <table className="table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>{service.user}</td>
                <td>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => deleteOrder(service._id)}
                  >
                    <FontAwesomeIcon icon={faMinusCircle} />
                    &nbsp; DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
