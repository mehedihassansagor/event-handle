import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand ps-4 pe-4 link-style">Event Maker</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item bar-hover">
                <Link class="nav-link ps-4 pe-4 link-style " to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item bar-hover">
                <Link class="nav-link ps-4 pe-4 link-style" to="/dashboard">
                  DashBoard
                </Link>
              </li>
              <li class="nav-item bar-hover">
                <Link class="nav-link ps-4 pe-4 link-style" to="/login">
                  logIn
                </Link>
              </li>
              {loggedInUser.email && (
                <li class="nav-item bar-hover">
                  <button
                    type="button"
                    className="btn btn-outline-warning ps-4 pe-4 link-style"
                    onClick={() => setLoggedInUser({})}
                  >
                    LogOut
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
