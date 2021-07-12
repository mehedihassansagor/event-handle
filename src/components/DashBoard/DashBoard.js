import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const DashBoard = () => {
  const [service, setService] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  var today = new Date();
  const onSubmit = (data) => {
    const order = {
      name: singleService.name,
      price: singleService.price,
      user: loggedInUser.name,
      email: loggedInUser.email,
      country: data.country,
      phone: data.phone,
      time: today,
    };
    console.log(order)
    const url = `https://warm-lake-41078.herokuapp.com/order`;
    console.log(order);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((res) => console.log("database Connected", res));
  };

  useEffect(() => {
    fetch("https://warm-lake-41078.herokuapp.com/event")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service.name]);

  const { _id } = useParams();
  const singleService = service.find((s) => s._id === _id);

  return (
    <div className="row container">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9 mt-5">
        <h1 >{singleService?.name}</h1>
        <h1 >{singleService?.price}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("country", { required: true })}
            placeholder="country"
          />
          <br />
          <br />
          <input
            {...register("phone", { required: true })}
            placeholder="phone"
          />
          <br />
          <br />
          <br />
          <input type="submit" value="order now" />
        </form>
      </div>
    </div>
  );
};

export default DashBoard;
