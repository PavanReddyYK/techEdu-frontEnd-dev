import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { toggleAction } from "../store/slice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4678/v1/student/signIn', {email: email,password: password })
      .then((res) => {
        console.log(res.data.message);
        if (res.status === 200) {
          sessionStorage.setItem("token", res.data.token);
        } else {
          console.error("Login failed:", res.data.message);
        }
      })
      .catch((err) => {
        console.error("Axios error::::", err.message);
      });
  };
  const handleToggle = () => {
    // dispatch(toggleAction())
    navigate("/signUp");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100 border"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="border p-4" style={{ backgroundColor: "#f6f6f9" }}>
        <div className="mb-3">
          <div className="text-center">
            <h4 className="mb-3">Login Page</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label d-block">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                password
              </label>
              <input
                type="password"
                className="form-control"
                id="pass"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter pass"
              />
            </div>
            <div className="mb-3 d-grid gap-2">
              <button type="submit" className="btn btn-outline-success">
                SignIn
              </button>
              <h6>
                click{" "}
                <a
                  onClick={() => handleToggle()}
                  className="text-decoration-none"
                >
                  <strong>here</strong>
                </a>{" "}
                to signUP
              </h6>
            </div>
            <div className="mb-3"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
