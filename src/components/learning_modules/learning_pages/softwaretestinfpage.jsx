import React, { Component } from "react";
import { Button } from "@mui/material";
import { Image } from "antd";
import { Collapse } from "antd";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import "../learning_pages/index.css";
import { dataforSoftwarepage } from "../learning_pages/data.json";
const items = dataforSoftwarepage;

export class softwaretestinfpage extends Component {
  render() {
    return (
      <div>
        <div
          style={{ padding: "10px", textAlign: "center", marginTop: "100px" }}
        >
          <h1 style={{ marginBottom: "10px" }}>Software Testing</h1>
          <h2 style={{ marginBottom: "20px" }}>6 Steps | 4 Participants</h2>
          <Button
            variant="contained"
            href="/learning/ccpage/SoftwareTesting"
            style={{ color: "white" }}
          >
            Join
          </Button>
        </div>
        <div
          className="image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "300px",
            height: "300px",
          }}
        >
          <Image
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            src="https://www.devprojournal.com/wp-content/uploads/2020/02/software-testing-768x432.jpg"
          />
        </div>
        <div className="about-learning">
          <h1>About</h1>
          <p className="about-p">
            In the tech industry, Software Testing is a highly sought-after
            position. Testing plays a vital role in the software development
            process by preventing bugs, reducing development costs, and
            improving performance. Software testing is integral to software
            development because it improves software quality, performance, and
            reliability and helps determine whether the software works
            correctly. Both manual and automation testing are in high demand to
            increase system performance.
          </p>
          <p>
            You can also join this program via the mobile app.
            <a href="#"> Go to the app</a>
          </p>
        </div>
        <div
          style={{
            marginLeft: "15%",
            marginRight: "15%",
            border: "0px",
          }}
        >
          <Collapse items={items} />
        </div>
        <hr className="hrs" />
        <div style={{ padding: "70px" }}>
          <h3>Price</h3>
          <p>Free</p>
        </div>
        <hr className="hrs" />
        <div className="socialMedia-icons-ler">
          <h2>Share</h2>
          <a href="https://www.instagram.com/collabvisioninfo/">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.facebook.com/sujatapradeepbadi/">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://www.collabvision.in/challenge-page/eb99df81-4fbb-46cb-9399-93508cc814c2">
            <LinkIcon fontSize="large" />
          </a>
          <br />
          <Button
            variant="contained"
            href="/learning/ccpage/ccpagecontent"
            style={{
              marginLeft: "35%",
              // marginRight: "15%",
              border: "0px",
              width: "auto",
              height: "50px",
              color: "white",
              margin: "40px",
              fontSize: "3vh",
            }}
          >
            Join
          </Button>
        </div>
      </div>
    );
  }
}

export default softwaretestinfpage;
