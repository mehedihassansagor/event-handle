import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };

    const url = `https://warm-lake-41078.herokuapp.com/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("database Connected", res));
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "798767f30df3dcdc7763cb42cb4936d6");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row container">
      <div className="col-md-4 ">
        <Sidebar />
      </div>

      <div className="col-md-8 ">
        <form align="center" onSubmit={handleSubmit(onSubmit)}>
          <h1>Add services</h1>
          <input
            placeholder="name of service"
            name="name"
            {...register("name")}
          />
          <br />
          <br />
          <textarea
          style={{height:"300px"}}
            name="description"
            placeholder="description"
            {...register("description")}
          />
          <br />
          <br />
          <input placeholder="price" name="price" {...register("price")} />
          <br />
          <br />
          <input type="file" onChange={handleImageUpload} />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <br />
          {/* <input   type="submit" /> */}
          <button type="submit" class="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
