import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <a className="active" href="/home">
          Home
        </a>
        <a href="/addEvent">Add service</a>
        <a href="/addAdmin">Add Admin</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Sidebar;
