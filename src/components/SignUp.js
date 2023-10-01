import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { toggleAction } from "../store/slice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    grade: "",
    email: "",
    contact1: "",
    contact2: "",
  });
  // const toggle = useSelector((state) => state.user.toggle);
  // const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleClick = () => {
    // dispatch(toggleAction(!toggle));
    navigate('/')
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  // Define a function to handle the radio button changes
  const handleGenderChange = (e) => {
    setFormData((prevData)=>({
      ...prevData ,
      gender : e.target.value
    }))
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 border">
      <div className="p-4 border min-vw-10">
        <div className="text-center">
          <h5>SignUp</h5>
        </div>
        <form>
          <label htmlFor="name" className="form-label d-block mb-0">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control mb-3"
            placeholder="Enter name"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="age" className="form-label d-block mb-0">
            Age
          </label>
          <input
            type="text"
            id="age"
            className="form-control mb-3"
            placeholder="Enter age"
            onChange={handleInputChange}
          ></input>
          <div>
            <label
              htmlFor="name"
              className="form-label ml-2"
              style={{ marginRight: "12px" }}
            >
              Gender:
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              style={{ marginRight: "2px" }}
              onChange={handleGenderChange}
              checked={formData.gender === "male"}
            />
            <label
              htmlFor="male"
              className="form-label"
              style={{ marginRight: "10px" }}
            >
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              style={{ marginRight: "2px" }}
              onChange={handleGenderChange}
              checked={formData.gender === "female"}
            />
            <label htmlFor="female" className="form-label">
              Female
            </label>
          </div>
          <label htmlFor="grade" className="form-label d-inline">
            Grade:
          </label>
          <select
            className="form-select d-inline"
            id="grade"
            style={{ maxWidth: "70px", marginLeft: "10px" }}
            onChange={handleInputChange}
          >
            <option value={"11"}>11</option>
            <option value={"12"}>12</option>
          </select>
          <label htmlFor="email" className="form-label d-block mb-0">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            onChange={handleInputChange}
            required
          ></input>
          <label htmlFor="contact1" className="form-label d-block mb-0">
            Contact Number
          </label>
          <input
            type="phone"
            id="contact1"
            className="form-control mb-3"
            placeholder="Enter Contact Number"
            required
            onChange={handleInputChange}
          ></input>
          <label htmlFor="contact2" className="form-label d-block mb-0">
            Contact Number (Optional)
          </label>
          <input
            type="phone"
            id="contact2"
            className="form-control mb-3"
            placeholder="Enter Contact Number"
            onChange={handleInputChange}
          ></input>
          <div className="d-grid">
            <button
              type="button"
              className="btn  btn-outline-secondary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="">
                click{" "}
                <a
                  onClick={() => handleClick()}
                  className="text-decoration-none"
                >
                  <>here</>
                </a>{" "}
                to login
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
