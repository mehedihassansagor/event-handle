import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";

const CustomerOrder = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [orders, setOrder] = useState([]);

  //   console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/customerOrderItem?email=` + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [loggedInUser.email]);
  return (
    <div className="row container">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        {orders.map((order) => (
          <li>
            {order.name} {order.email}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CustomerOrder;
