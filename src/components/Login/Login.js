import React, { useEffect, useState } from "react";
import "./Login.css";
import GoogleButton from "react-google-button";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState("none");

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        const { displayName, email } = result.user;
        const singnedInUser = { name: displayName, email };
        setLoggedInUser(singnedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

    console.log("google click");
  };
  useEffect(() => {
    fetch("http://localhost:5000/adminDetails")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    admins.forEach((admin) => {
      if (data.email === admin.email && data.password === admin.password) {
        const signedInUser = {
          isSignedIn: true,
          displayName: admin.name,
          email: admin.email,
          password: admin.password,
        };
        setLoggedInUser(signedInUser);
        setError("none");
        history.replace(from);
      } else {
        setError("block");
      }
    });
  };
  return (
    <div className=" back-ground" style={{height:"666px"}}>
    <div className="row container ">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="container pt-5 mt-5 col-md-6">
          <div className="row">
            <div className="text-center" style={{}}>
              <span>
                For admin email: admin@admin.com <br /> password:29292939
                <br />
                Normal user please use google login button
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group pb-3">
                <label htmlFor="email" className="pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g example@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", { required: true })}
                  id="email"
                  className="form-control"
                  autoComplete="off"
                />
                {errors.email && (
                  <span role="alert" className="text-danger">
                    {" "}
                    Email required{" "}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="pb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="e.g At least 8 character"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password", { required: true, minLength: 8 })}
                  id="password"
                  className="form-control"
                  autoComplete="off"
                />
                {errors.password && (
                  <span role="alert" className="text-danger">
                    {" "}
                    Password required & must contain at least 8 character{" "}
                  </span>
                )}
              </div>

              <br />

              <div
                className="form-group pb-3 text-center"
                style={{ display: error }}
              >
                <span style={{ color: "red" }}>
                  Email or Password In-Correct
                </span>
              </div>

              <div className="form-group pb-3">
                <input
                  type="submit"
                  name="submitLogin"
                  className="btn btn-primary form-control"
                />
              </div>
              <div className="d-flex justify-content-center">
                <GoogleButton onClick={handleGoogle} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
