import React, { useState } from "react";
import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
import Navbar from "../attributes/Navbar";
import axios from "axios";
const Cont = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    message: "",

    // Add country field to form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.phone ||
      !formData.country // Validate country field
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    const countryCode = {
      india: "+91",
      us: "+1",
      singapur: "+65",
    };

    if (formData.country) {
      const countcode = countryCode[formData.country.toLowerCase()];

      if (countcode) {
        formData.phone = `${countcode}${formData.phone}`;
      }
    }

    try {
      const response = await axios.post(
        "https://cviswebsitebackend.onrender.com/contact",
        formData
      );
      console.log("SUBMITTED", response.data);
    } catch (e) {
      console.log(e);
    }

    // try {
    //   const response = await axios.post(
    //     "https://cviswebsitebackend.onrender.com/feedback",
    //     formData
    //   );

    //   console.log(response.data);
    // } catch (e) {
    //   console.log(e);
    // }

    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);

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
      <Navbar />{" "}
      <h3
        style={{
          margin: "100px 20px 10px 20px",
          textAlign: "center",
          fontSize: "1.2em",
        }}
      >
        {/* We'd love to hear from you! Whether you have questions, need support, or
        are interested in our services, please fill out the form below. Our team
        will get back to you as soon as possible. */}
        <br />
        <></>
        <br />
        <div
          style={{
            color: "#007bff",
            fontSize: "1.2em",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          🚀 Contact us for any questions or inquiries about our services.
        </div>
        <div
          style={{
            color: "#007bff",
            fontSize: "1.2em",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          🛠️ Reach out for technical support or service-related issues.
        </div>
        <div
          style={{
            color: "#007bff",
            fontSize: "1.2em",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          💬 Share your experience or provide feedback on our services.
        </div>
        <div
          style={{
            color: "#007bff",
            fontSize: "1.2em",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          📝 Request a personalized quote for your project.
        </div>
        <div
          style={{
            color: "#007bff",
            fontSize: "1.2em",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          📅 For general information or to schedule a consultation below.
        </div>
        <br />
      </h3>
      <div className="feed-form-container">
        <form onSubmit={handleSubmit} className="feed-form animate-left">
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
              <option value="India">india </option>
              <option value="US">us</option>
              <option value="Singapore">singapore</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ border: "none", borderBottom: "1px solid black" }}
            />
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
