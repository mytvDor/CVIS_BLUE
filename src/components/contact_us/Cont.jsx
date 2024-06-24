import React, { useState } from "react";
import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
import Navbar from "../attributes/Navbar";

const Cont = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    country: "", // Add country field to form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.country // Validate country field
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      country: "", // Reset country field
    });
  };

  return (
    <>
      <Navbar />
      <div className="feed-form-container">
        <form onSubmit={handleSubmit} className="feed-form">
          <h1 style={{ textAlign: "center", margin: "40px" }}> Contact Us </h1>
          <div className="form-group single-line-input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ border: "none", borderBottom: "1px solid black" }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ border: "none", borderBottom: "1px solid black" }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ border: "none", borderBottom: "1px solid black" }}
            />
          </div>{" "}
          <div className="form-group">
            {/* <label htmlFor="country">Select Your Country:</label> */}
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{
                width: "100%",
                paddingTop: "10px",
                paddingBottom: "25px",

                border: "none",
                borderBottom: "1px solid black",
              }}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: "97%",
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Cont;
