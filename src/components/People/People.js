import React from "react";
import "./People.css";

const People = ({people}) => {
    console.log(people.sagorimg)
  return (
    <div class="flip-card" tabIndex="0">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={people.img} alt=""  style={{height:"100%", width:"90%"}}/>
        </div>
        <div class="flip-card-back">
          <p>{people.name}</p>
          <p>{people.title}</p>
          <p>{people.description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default People;
