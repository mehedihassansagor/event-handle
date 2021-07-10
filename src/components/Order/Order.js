import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Order = () => {
  const [orders, setOrder] = useState([]);
  //   console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5000/allOrder")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const deleteOrder = (id) => {
    fetch(`http://localhost:5000/orderDelete/${id}`, {
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
      <div className="col-md-9  mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>name</th>
              <th>Time</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.name}</td>
                <td>{order.user}</td>
                <td>{order.time}</td>
                <td>{order.email}</td>
                <td>
                  <button onClick={() => deleteOrder(order._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
