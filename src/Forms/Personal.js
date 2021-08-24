import React, { useState } from "react";
import "./page.css";

const Personal = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="div_data">
        <div>
          <label htmlFor="firstName">Name : </label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Age : </label>
          <input
            className="form-control"
            type="number"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            className="form-control"
            type="text"
            id="address"
            name="address"
            value={person.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">MobileNo: </label>
          <input
            className="form-control"
            type="number"
            id="phone"
            name="phone"
            value={person.phone}
            onChange={handleChange}
          />
        </div>
        <div className="dis">
          <button className="sunmit_btn" type="submit" onClick={handleSubmit}>
            add Personal
          </button>
          <button className="sunmit_btn">Next</button>
        </div>
      </form>
    </div>
  );
};
export default Personal;
