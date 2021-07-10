import React, { useEffect, useState } from 'react';
import Sidebar from './../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [services.name]);

  const deleteOrder = (id) => {
    fetch(`http://localhost:5000/serviceDelete/${id}`, {
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
      .catch((err) => {})
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
                  <button onClick={() => deleteOrder(service._id)}>DELETE</button>
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