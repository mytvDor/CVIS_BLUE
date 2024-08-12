import React from "react";
import Android from "./card media/android dev.png";
import Integration from "./card media/integration.jpg";
import Learning from "./card media/Learning.jpg";
import DigitalMarketing from "./card media/digital marketing.png";
import WebDesigning from "./card media/web_designing.jpg";
import "./cards.css";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/pricing/${category}`);
  };
  return (
    <div className="main-container">
      <div className="card-container">
        {/* First Card - Android App Development */}
        <div
          className="card animate-left"
          onClick={() => handleCardClick("App Development")}
        >
          <div className="card-image">
            <img src={Android} alt="Android App Development" />
          </div>
          <div className="card-content">
            <div className="card-title">App Development</div>
            <p className="card-text" style={{ textAlign: "left" }}>
              Empowering innovation through cutting-edge mobile and web app
              development tailored to your needs.
            </p>
          </div>
        </div>

        <div
          className="card animate-right"
          onClick={() => handleCardClick("App Development")}
        >
          {" "}
          <div className="card-image">
            <img src={Integration} alt="integration" />
          </div>
          <div className="card-content">
            <div className="card-title">Integration</div>
            <p className="card-text" style={{ textAlign: "left" }}>
              Seamlessly connecting systems and enhancing workflows with our
              robust integration platform solutions
            </p>
          </div>
        </div>

        {/* Second Card - Software Testing */}
        <div
          className="card animate-left"
          onClick={() => handleCardClick("App Development")}
        >
          {" "}
          <div className="card-image">
            <img src={Learning} alt="Learning Platform" />
          </div>
          <div className="card-content">
            <div className="card-title">Learning Platform</div>
            <p className="card-text" style={{ textAlign: "left" }}>
              Elevate your skills with our proprietary, state-of-the-art
              learning platform designed for comprehensive education.
            </p>
          </div>
        </div>

        {/* Third Card - Digital Marketing */}
        {/* <div className="card">
          <div className="card-image">
            <img src={DigitalMarketing} alt="Digital Marketing" />
          </div>
          <div className="card-content">
            <div className="card-title">Digital Marketing</div>
            <div className="card-text">
              Using digital marketing techniques, you can reach a global
              audience in a way that is cost-effective, scalable, and
              measurable. Some of the key benefits of digital marketing include:
              The ability to interact with your prospects and learn exactly what
              they are looking for, i.e., get to know your customers better!
            </div>
          </div>
        </div> */}

        {/* Fourth Card - Web Designing */}
        <div
          className="card animate-right"
          onClick={() => handleCardClick("App Development")}
        >
          {" "}
          <div className="card-image ">
            <img
              src={WebDesigning}
              alt="Web Designing"
              onClick={() => handleCardClick("WebDevelopment")}
            />
          </div>
          <div className="card-content">
            <div className="card-title">Web Designing</div>
            <p className="card-text" style={{ textAlign: "left" }}>
              Creating dynamic and tailored web solutions with our expert web
              development services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
