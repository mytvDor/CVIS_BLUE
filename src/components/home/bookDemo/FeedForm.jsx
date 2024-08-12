// import React, { useState } from "react";
// import "./FeedForm.css"; // Import your custom CSS file

// const FeedForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     rating: null,
//     likedMost: "",
//     improvementSuggestions: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRatingChange = (e) => {
//     const newValue = parseInt(e.target.value, 10);
//     setFormData((prevData) => ({
//       ...prevData,
//       rating: newValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       formData.rating === null
//     ) {
//       alert("Please fill in all mandatory fields.");
//       return;
//     }

//     // Handle form submission logic here (e.g., send data to server)
//     console.log(formData);

//     // Reset form fields after submission
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       rating: null,
//       likedMost: "",
//       improvementSuggestions: "",
//     });
//   };

//   return (
//     <div className="feed-form-container">
//       <form onSubmit={handleSubmit} className="feed-form">
//         <h1 style={{ textAlign: "center", margin: "40px" }}>
//           {" "}
//           What you think about service{" "}
//         </h1>
//         <div className="form-group single-line-input">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             style={{ border: "none", borderBottom: "1px solid black" }}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             style={{ border: "none", borderBottom: "1px solid black" }}
//           />
//         </div>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={{ border: "none", borderBottom: "1px solid black" }}
//         />
//         <div className="form-group">
//           <label className="">Rate Our Services</label>
//           <div className="rtmn">
//             {" "}
//             <div className="rating">
//               <input
//                 type="radio"
//                 id="star5"
//                 name="rating"
//                 value={5}
//                 onChange={handleRatingChange}
//                 checked={formData.rating === 5}
//               />
//               <label htmlFor="star5">
//                 <i className="far fa-star"></i>
//               </label>
//               <input
//                 type="radio"
//                 id="star4"
//                 name="rating"
//                 value={4}
//                 onChange={handleRatingChange}
//                 checked={formData.rating === 4}
//               />
//               <label htmlFor="star4">
//                 <i className="far fa-star"></i>
//               </label>
//               <input
//                 type="radio"
//                 id="star3"
//                 name="rating"
//                 value={3}
//                 onChange={handleRatingChange}
//                 checked={formData.rating === 3}
//               />
//               <label htmlFor="star3">
//                 <i className="far fa-star"></i>
//               </label>
//               <input
//                 type="radio"
//                 id="star2"
//                 name="rating"
//                 value={2}
//                 onChange={handleRatingChange}
//                 checked={formData.rating === 2}
//               />
//               <label htmlFor="star2">
//                 <i className="far fa-star"></i>
//               </label>
//               <input
//                 type="radio"
//                 id="star1"
//                 name="rating"
//                 value={1}
//                 onChange={handleRatingChange}
//                 checked={formData.rating === 1}
//               />
//               <label htmlFor="star1">
//                 <i className="far fa-star"></i>
//               </label>
//             </div>
//           </div>
//           <div className="result"></div>
//         </div>
//         <div className="form-group">
//           {/* <label htmlFor="likedMost">What did you like best?</label> */}
//           <textarea
//             id="likedMost"
//             name="likedMost"
//             value={formData.likedMost}
//             onChange={handleChange}
//             style={{
//               border: "none",
//               borderBottom: "1px solid black",
//               width: "95%",
//             }}
//             placeholder="What did you like most ?"
//           />
//         </div>
//         <div className="form-group">
//           {/* <label htmlFor="improvementSuggestions">How can we improve?</label> */}
//           <textarea
//             id="improvementSuggestions"
//             name="improvementSuggestions"
//             placeholder="How can we improve ?"
//             value={formData.improvementSuggestions}
//             onChange={handleChange}
//             style={{
//               border: "none",
//               borderBottom: "1px solid black",
//               width: "95%",
//             }}
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Send Feedback</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FeedForm;
import React, { useState } from "react";
import "./FeedForm.css"; // Import your custom CSS file
import axios from "axios";
const FeedForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rating: null,
    likeMost: "",
    improve: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setFormData((prevData) => ({
      ...prevData,
      rating: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      formData.rating === null
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://cviswebsitebackend.onrender.com/feedback",
        formData
      );

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }

    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      rating: null,
      likedMost: "",
      improvementSuggestions: "",
    });
  };

  return (
    <div
      className="feed-form-container"
      style={{ marginTop: "230px", marginBottom: "230px" }}
    >
      <form onSubmit={handleSubmit} className="feed-form">
        <h1 style={{ textAlign: "center", margin: "40px" }}>
          {" "}
          What you think about service{" "}
        </h1>
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

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ border: "none", borderBottom: "1px solid black" }}
        />
        <div className="form-group rt">
          <label className="rtn">Rate Our Services</label>
          <div className="stars">
            <div className="rating" style={{ width: "200px" }}>
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={formData.rating === star}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor={`star${star}`}></label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="likeMost"
            name="likeMost"
            value={formData.likeMost}
            onChange={handleChange}
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "95%",
            }}
            placeholder="What did you like most ?"
          />
        </div>
        <div className="form-group">
          <textarea
            id="Improve"
            name="Improve"
            placeholder="How can we improve ?"
            value={formData.Improve}
            onChange={handleChange}
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "95%",
            }}
          />
        </div>
        <div className="form-group">
          <button type="submit">Send Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedForm;
