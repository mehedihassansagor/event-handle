import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerOrder = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [orders, setOrder] = useState([]);

  //   console.log(orders);
  useEffect(() => {
    fetch(`https://warm-lake-41078.herokuapp.com/customerOrderItem?email=` + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [loggedInUser.email]);

  const deleteOrder = (id) => {
    fetch(`https://warm-lake-41078.herokuapp.com/orderDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newOrder = orders.filter((order) => order._id !== id);
          setOrder(newOrder);
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
              <th>Email</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.time}</td>
                <td>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => deleteOrder(order._id)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faTrash} />
                    &nbsp; Cancel
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

export default CustomerOrder;
