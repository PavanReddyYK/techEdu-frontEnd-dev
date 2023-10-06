import React from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "../Schemas";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  contactPrimary: "",
  contactSecondary: "",
  age: "",
  grade: "",
  gender: "",
  city: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: async (values, action) => {
        const payload = {
          name: values.name,
          email: values.email,
          primaryC: values.contactPrimary,
          secondaryC: values.contactSecondary,
          age: values.age,
          grade: values.grade,
          gender: values.gender,
          city: values.city,
          password: values.password,
        };
        await axios
          .post("http://localhost:4678/v1/student/addStudent", payload)
          .then((res) => {
            console.log("🚀Register.js:40 ~ .then ~ res:", res.data);
          })
          .catch((err) => console.log("axios error??:", err));
        action.resetForm();
      },
    });
  const handleSignInClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className=" d-flex align-items-center justify-content-center min-vh-100 border">
        <div className="border p-4 m-4" style={{ minWidth: "360px" }}>
          <div className="mb-4 text-center">
            <h4>Registration</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap">
              {/* ---------------------------------NAME-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="name" className="form-label mb-0">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  autoComplete="off"
                  className="form-control"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name ? (
                  <p className="form-error text-danger mb-0">{errors.name}</p>
                ) : null}
              </div>
              {/* ------------------------------EMAIL-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="email" className="form-label mb-0">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                  autoComplete="off"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p className="form-error text-danger mb-0">{errors.email}</p>
                ) : null}
              </div>
              {/* ------------------------------Primary Contact-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="contactPrimary" className="form-label mb-0">
                  Primary Contact
                </label>
                <input
                  type="tel"
                  id="contactPrimary"
                  name="contactPrimary"
                  placeholder="contact number"
                  className="form-control"
                  autoComplete="off"
                  value={values.contactPrimary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.contactPrimary && touched.contactPrimary ? (
                  <p className="form-error text-danger mb-0">
                    {errors.contactPrimary}
                  </p>
                ) : null}
              </div>
              {/* ------------------------------Secondary Contact-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="contactSecondary" className="form-label mb-0">
                  Secondary Contact
                </label>
                <input
                  type="tel"
                  id="contactSecondary"
                  name="contactSecondary"
                  placeholder="contact number(Optional)"
                  className="form-control"
                  autoComplete="off"
                  value={values.contactSecondary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.contactSecondary && touched.contactSecondary ? (
                  <p className="form-error text-danger mb-0">
                    {errors.contactSecondary}
                  </p>
                ) : null}
              </div>
              {/* ------------------------------AGE-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="age" className="form-label mb-0">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="age"
                  className="form-control"
                  autoComplete="off"
                  value={values.age}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.age && touched.age ? (
                  <p className="form-error text-danger mb-0">{errors.age}</p>
                ) : null}
              </div>
              {/* ------------------------------GRADE-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="grade" className="form-label mb-0">
                  Grade
                </label>
                <input
                  type="number"
                  id="grade"
                  name="grade"
                  placeholder="grade of study"
                  className="form-control"
                  autoComplete="off"
                  value={values.grade}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.grade && touched.grade ? (
                  <p className="form-error text-danger mb-0">{errors.grade}</p>
                ) : null}
              </div>
              {/* ------------------------------GENDER-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="gender" className="form-label mb-0">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  placeholder="male or female"
                  className="form-control"
                  autoComplete="off"
                  value={values.gender}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.gender && touched.gender ? (
                  <p className="form-error text-danger mb-0">{errors.gender}</p>
                ) : null}
              </div>
              {/* ------------------------------CITY-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="city" className="form-label mb-0">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="city"
                  className="form-control"
                  autoComplete="off"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.city && touched.city ? (
                  <p className="form-error text-danger mb-0">{errors.city}</p>
                ) : null}
              </div>
              {/* ------------------------------PASSWORD-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="password" className="form-label mb-0">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="form-control"
                  autoComplete="off"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <p className="form-error text-danger mb-0">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              {/* ----------------------------CONFIRM-PASSWORD-------------------- */}
              <div
                className="input-block mb-2"
                style={{ width: "350px", margin: "auto" }}
              >
                <label htmlFor="confirmPassword" className="form-label mb-0">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  autoComplete="off"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="form-error text-danger mb-0">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="d-grid mt-4 align-items-center  justify-content-center ">
              <button type="submit" className="btn btn-outline-secondary mb-2">
                Submit
              </button>
              <>
                Already have an account?{" "}
                <a
                  onClick={() => handleSignInClick()}
                  className="text-decoration-none text-center"
                >
                  <>
                    <strong>SingnIn here</strong>
                  </>
                </a>
              </>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
