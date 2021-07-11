import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  faAlignJustify,
  faArchive,
  faEject,
  faHouseUser,
  faPlusSquare,
  faToolbox,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 

  return (
    <div>
      <div className="sidebar">
        <Link className="active">
          <FontAwesomeIcon icon={faAlignJustify} />
          &nbsp; DashBoard
        </Link>
        <Link to="/home">
          <FontAwesomeIcon icon={faHouseUser} />
          &nbsp; Home
        </Link>
        <Link to="/customerOrder">
          <FontAwesomeIcon icon={faArchive} />
          &nbsp; Order
        </Link>
        {loggedInUser.email==="admin@admin.com" && (
          <div>
            <Link to="/addEvent">
              <FontAwesomeIcon icon={faPlusSquare} />
              &nbsp; Add service
            </Link>
            <Link to="/order">
              <FontAwesomeIcon icon={faToolbox} />
              &nbsp; Manage Order
            </Link>
            <Link to="/manageService">
              <FontAwesomeIcon icon={faTools} />
              &nbsp; Manage Service
            </Link>
          </div>
        )}
        <Link to="#about">
          <FontAwesomeIcon icon={faEject} />
          &nbsp; About
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
