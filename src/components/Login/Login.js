import React from "react";
import "./Login.css";
import GoogleButton from "react-google-button";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
   var token = credential.accessToken;
    const {displayName,email}  = result.user;
    const singnedInUser = { name : displayName, email}
    setLoggedInUser(singnedInUser)
    history.replace(from)
    
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });


    console.log("google click")
  }
  return (
    <div className="body-style">
      <div class="container px-4 py-5 mx-auto">
        <div class="card card0">
          <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
              <div class="row justify-content-center my-auto">
                <div class="col-md-8 col-10 my-5">
                  <div class="row justify-content-center px-3 mb-3">
                    {" "}
                    <img id="logo" src="" />{" "}
                  </div>
                  <h3 class="mb-5 text-center heading">We are Tidi</h3>
                  <h6 class="msg-info">Please login to your account</h6>
                  <div class="form-group">
                    {" "}
                    <label class="form-control-label text-muted">
                      Username
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Phone no or email id"
                      class="form-control"
                    />{" "}
                  </div>
                  <div class="form-group">
                    {" "}
                    <label class="form-control-label text-muted">
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      class="form-control"
                    />{" "}
                  </div>
                  <div class="row justify-content-center my-3 px-3">
                    {" "}
                    <button class="btn-block btn-color">
                      Login to event
                    </button>{" "}
                    
                  </div>
                  <div class="row justify-content-center my-2">
                    {" "}
                    <a href="#">
                      <small class="text-muted">Forgot Password?</small>
                    </a>{" "}
                    <br />
                    <br />
                    
                    <GoogleButton
                      onClick={handleGoogle}
                    />
                  </div>
                 
                </div>
              </div>
              <div class="bottom text-center mb-5">
                <p href="#" class="sm-text mx-auto mb-3">
                  Don't have an account?
                  <button class="btn btn-white ml-2">Create new</button>
                </p>
              </div>
            </div>
            <div class="card card2">
              <div class="my-auto mx-md-5 px-md-5 right">
                <h3 class="text-white">We are more than just a company</h3>{" "}
                <small class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
