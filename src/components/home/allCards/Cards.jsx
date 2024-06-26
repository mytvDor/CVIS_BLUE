import React from "react";
import Android from "./card media/android dev.png";
import Integration from "./card media/integration.jpg";
import SoftwareTesting from "./card media/software_testing.jpg";
import DigitalMarketing from "./card media/digital marketing.png";
import WebDesigning from "./card media/web_designing.jpg";
import "./cards.css";

const Cards = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        {/* First Card - Android App Development */}
        <div className="card">
          <div className="card-image">
            <img src={Android} alt="Android App Development" />
          </div>
          <div className="card-content">
            <div className="card-title">App Development</div>
            <div className="card-text">
              It is the process by which applications are created for devices
              running the Android operating system. This will help for business
              through mobile. It gives more value to your business using a
              mobile app for your customers and clients.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Integration} alt="Android App Development" />
          </div>
          <div className="card-content">
            <div className="card-title">Integration</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus repudiandae modi, maxime, nisi id magnam cum, ipsa
              officia dicta vitae consequuntur. Modi, nisi. Laborum similique
              praesentium optio dolorum atque nobis!
            </div>
          </div>
        </div>

        {/* Second Card - Software Testing */}
        <div className="card">
          <div className="card-image">
            <img src={SoftwareTesting} alt="Software Testing" />
          </div>
          <div className="card-content">
            <div className="card-title">Learning Platform</div>
            <div className="card-text">
              We provide our learning platform in a manner that ensures global
              accessibility, cost-effectiveness, and scalability. Our approach
              allows for direct interaction with learners, enabling us to tailor
              educational experiences and better understand their needs and
              goals.
            </div>
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
        <div className="card">
          <div className="card-image">
            <img src={WebDesigning} alt="Web Designing" />
          </div>
          <div className="card-content">
            <div className="card-title">Web Designing</div>
            <div className="card-text">
              A well-designed website can help you form a good impression on
              your prospective customers. It can also help you nurture your
              leads and get more conversions. But, more importantly, it provides
              a good user experience and helps your website visitors access and
              navigate your website with ease.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
