import React, { Component } from "react";
import { Button } from "@mui/material";
import { Image } from "antd";
import { Collapse } from "antd";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import "../learning_pages/index.css";
import { dataforccMulpage } from "../learning_pages/data.json";
const items = dataforccMulpage;

export class ccmulesoft extends Component {
  render() {
    return (
      <div>
        <div
          style={{ padding: "10px", textAlign: "center", marginTop: "100px" }}
        >
          {" "}
          <h1 style={{ marginBottom: "10px" }}>Cloud computing- Mulesoft</h1>
          <h2 style={{ marginBottom: "20px" }}>6 Steps | 2 Participants</h2>
          <Button
            variant="contained"
            href="/learning/ccmulcontent"
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
            src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?w=1060&t=st=1691315861~exp=1691316461~hmac=87318722d9b334d9ce0454cbdd3b676c146bdd6e28af7d30f3f30549eea36586"
          />
        </div>
        <div className="about-learning">
          <h1>About</h1>
          <p className="about-p">
            Cloud computing is the on-demand availability of computer system
            resources, especially data storage and computing power, without
            direct active management by the user. Large clouds often have
            functions distributed over multiple locations, each of which is a
            data center.
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

export default ccmulesoft;
