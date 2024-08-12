import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import axios from "axios";

const Testimonials = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cviswebsitebackend.onrender.com/feedbackthree"
        );
        console.log(response.data);
        setFeeds(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
    // console.log(feeds);
  }, []);
  return (
    <div className="body1">
      {" "}
      <h1>What our customer says ?</h1>{" "}
      <div className="wrapper">
        {feeds.map((item) => (
          <div key={item._id} className="box animate-down">
            <i className="fas fa-quote-left quote"></i>
            <p>{item.likeMost}</p>
            <div className="content">
              <div className="info">
                <div
                  className="raing"
                  style={{ color: "gold", fontSize: "20px" }}
                >
                  {Array.from({ length: item.rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className="name">
                  {item.firstName} {item.lastName}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="box animate-down">
          <i className="fas fa-quote-left quote"></i>
          <p>
            Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
            elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
            repellendus repudiandae deleniti ideas fuga molestiae, alias.
          </p>
          <div className="content">
            <div className="info">
              <div className="name">Alex Smith</div>
            </div>
          </div>
        </div>
        <div className="box animate-down">
          <i className="fas fa-quote-left quote"></i>
          <p>
            Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
            elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
            repellendus repudiandae deleniti ideas fuga molestiae, alias.
          </p>
          <div className="content">
            <div className="info">
              <div className="name">Alex Smith</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
