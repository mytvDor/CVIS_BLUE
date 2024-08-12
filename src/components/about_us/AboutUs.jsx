/* eslint-disable react/no-unescaped-entities */

// import "./aboutus.css";
// import CoreValues from "./CoreValues";
// import Navbar from "../attributes/Navbar";
// import "./About.css";

// function AboutUs() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="aboutUs-header-container">
//         <div className="image-overlay">
//           <div className="image-overlayText">
//             <div className="image-left myblock">
//               <h1 className="animate-from-left">Our Mission Is to Empower</h1>
//               <br />
//               <div className="image-left-row">
//                 <div className="item-n">
//                   <p className="num">24</p>
//                   <p className="num-image-left-text">
//                     Professional Online Modules
//                   </p>
//                 </div>

//                 <div className="item-n">
//                   <p className="num">16</p>
//                   <p className="num-image-left-text">
//                     Industry Leading Mentors
//                   </p>
//                 </div>

//                 <div className="item-n">
//                   <p className="num">99%</p>
//                   <p className="num-image-left-text">
//                     Satisfaction Rated by Students
//                   </p>
//                 </div>
//               </div>

//               <div className="image-left-row">
//                 <div>
//                   <p className="num">99%</p>
//                   <p className="num-image-left-text">
//                     Satisfaction Rated by Students
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="image-right myblock">
//               <div className="image-right-title">Our Vision</div>
//               <div className="image-right-text">
//                 <p>
//                   For excellent leadership and life long success a centre of
//                   higher learning to establish and develop and institute with
//                   expanding horizon of knowledge in the field of engineering and
//                   technology.
//                 </p>
//               </div>

//               <div className="image-right-title">Our Mission</div>

//               <div className="image-right-text">
//                 <p>
//                   To provide professional program creative academics through
//                   high-quality education in the engineering and
//                   disciplines.Establish mutual beneficial partnerships with
//                   Industry, Alumni, Local, State and Central Governments by
//                   Public Service Assistance and Collaborative Research.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="cval">
//         <CoreValues />
//       </div>
//       <div className="aboutUs-bottom-container">
//         <div className="text">
//           <h1>About Collab Vision Infosolutions</h1>

//           <p className="intro">
//             CVIS is a leading company focused on Cloud Technology (Salesforce
//             and MuleSoft), Website, Android App, Testing Project, Digital
//             Marketing Services, and Technical Support in Kolhapur. We build
//             great products and solutions for your business problems.
//           </p>

//           <div className="mission-section">
//             <h2>Our Mission</h2>
//             <p>
//               We specialize in Cloud, Software, and Mobile App Development
//               services for various industries including Ecommerce, Education,
//               Manufacturing, Healthcare, and more.
//             </p>
//           </div>

//           <div className="opportunities-section">
//             <h2>Opportunities and Certifications</h2>
//             <p>
//               Master MuleSoft technology for a world of opportunities. Become a
//               MuleSoft Certified developer through our training and receive
//               company certification. Get real-time project experience along with
//               the chance to prepare for MuleSoft certification provided by
//               Salesforce/MuleSoft.
//             </p>
//           </div>

//           <div className="tools-section">
//             <h2>From MuleSoft Developer's Eye</h2>
//             <p>Learn the essential tools needed for MuleSoft development:</p>
//             <ol>
//               <li>GitHub and GitHub Desktop - Push code to repositories</li>
//               <li>Postman - Test applications or APIs</li>
//               <li>AnyPoint Platform & Studio - Design the code</li>
//             </ol>
//           </div>
//         </div>
//         <div className="image">
//           <img
//             src="https://static.wixstatic.com/media/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg/v1/fill/w_912,h_1510,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg"
//             alt="imgageLeft"
//           />
//         </div>
//       </div>

//       {/* <Navbar></Navbar>
//       <div className="myimg"></div>
//       <div className="back-supp">
//         {" "}
//         <div className="abt-main">
//           <div className="gap"></div>{" "}
//           <div className="first-abt">
//             {" "}
//             <h1>About Collab Vision Infosolutions</h1>
//             <p className="intro">
//               CVIS is a leading company focused on Cloud Technology (Salesforce
//               and MuleSoft), Website, Android App, Testing Project, Digital
//               Marketing Services, and Technical Support in Kolhapur. We build
//               great products and solutions for your business problems.
//             </p>
//           </div>
//           <div className="mission-section">
//             <h2>Our Mission</h2>
//             <p>
//               We specialize in Cloud, Software, and Mobile App Development
//               services for various industries including Ecommerce, Education,
//               Manufacturing, Healthcare, and more.
//             </p>
//           </div>
//           <div className="opportunities-section">
//             <h2>Opportunities and Certifications</h2>
//             <p>
//               Master MuleSoft technology for a world of opportunities. Become a
//               MuleSoft Certified developer through our training and receive
//               company certification. Get real-time project experience along with
//               the chance to prepare for MuleSoft certification provided by
//               Salesforce/MuleSoft.
//             </p>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default AboutUs;
import React from "react";
import CoreValues from "./CoreValues";
import Navbar from "../attributes/Navbar";
import "./About.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="mainAbt">
        <div className="coverblack">
          <div className="myblock">
            <h1 className="animate-from-left">Our Mission Is to Empower</h1>
            <br />
            <div className="image-left-row">
              <div className="itemf">
                {" "}
                <div className="item-n">
                  <h1 className="num">24</h1>
                  <p className="num-image-left-text">
                    Professional Software Modules
                  </p>
                </div>
                <div className="item-n">
                  <h1 className="num">16</h1>
                  <p className="num-image-left-text">
                    Industry Leading Experts
                  </p>
                </div>
              </div>
              <div className="itemf">
                <div className="item-n">
                  <h1 className="num">99%</h1>
                  <p className="num-image-left-text">
                    Satisfaction Rated by Clients
                  </p>
                </div>
                <div className="item-n">
                  <h1 className="num">99%</h1>
                  <p className="num-image-left-text">
                    Satisfaction Rated by Students
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" myblock">
            <h1 className="image-right-title rightcont">Our Vision</h1>
            <div className="image-right-text">
              <p className="myp">
                To lead the future of technology through innovative software
                solutions, driving transformative change and empowering
                businesses to reach new heights.
              </p>
            </div>

            <h1 className="image-right-title rightcont">Our Mission</h1>

            <div className="image-right-text">
              <p className="myp">
                To deliver exceptional software development services with a
                focus on quality, creativity, and client satisfaction. Forge
                strategic partnerships with industry leaders and stakeholders to
                advance technology, foster growth, and create impactful
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main part end */}

      <div className="core-values-container">
        <div className="core-value">
          <h2>Cutting-Edge Technology & Skills 💡</h2>
          <p>
            Our solutions leverage the latest technologies and skills to meet
            industry demands.
          </p>
        </div>
        <div className="core-value">
          <h2>Expert Team 🌟</h2>
          <p>
            Our certified experts bring extensive industry experience to every
            project, ensuring top-notch solutions.
          </p>
        </div>
        <div className="core-value">
          <h2>Innovative Problem Solving 🧩</h2>
          <p>
            We tackle challenges with creative solutions and real-world
            scenarios to foster a strategic mindset.
          </p>
        </div>
        <div className="core-value">
          <h2>Comprehensive Support 🤝</h2>
          <p>
            From initial concept to deployment, we provide end-to-end support
            for all your software needs.
          </p>
        </div>
        <div className="core-value">
          <h2>Growth-Focused Solutions 🚀</h2>
          <p>
            Our tailored software solutions are designed to accelerate your
            business growth and drive success.
          </p>
        </div>
      </div>

      {/* main part end */}
      <section className="aboutUs-bottom-container" style={{ height: "auto" }}>
        <div className="text" style={{ height: "auto" }}>
          <h1
            style={{
              fontSize: "40px",
              color: "#007bff",
              fontWeight: "900",
            }}
            className="animate-down"
          >
            About Collab Vision Infosolutions
          </h1>

          <h3
            style={{
              margin: "30px ",
              fontSize: "20px",
              fontWeight: "700",
            }}
            className="animate-right"
          >
            {" "}
            We are a premier software development company specializing in
            innovative solutions across diverse domains including Cloud
            Technology, Web Development, Mobile Applications, and Digital
            Solutions. Our expert team delivers high-quality products and
            services designed to address your unique business challenges and
            drive success.
          </h3>
          <h1
            style={{
              fontSize: "40px",
              color: "#007bff",
              fontWeight: "900",
            }}
            className="animate-down"
          >
            Our Mission{" "}
          </h1>

          <h3
            style={{
              margin: "30px ",
              fontSize: "20px",
              fontWeight: "700",
            }}
            className="animate-right"
          >
            {" "}
            We excel in delivering cutting-edge software development solutions
            tailored to diverse industries, including Ecommerce, Education,
            Manufacturing, and Healthcare. Our focus is on leveraging innovative
            technologies to drive growth and solve complex challenges for our
            clients.
          </h3>
          {/* <div
            className="imgCont"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",

              width: "100%",
              height: "auto",
            }}
          >
            <div
              className="leftOpp "
              style={{
                minWidth: "350px",
                maxWidth: "60%",
                marginTop: "40px",
              }}
            >
              {" "}
              <div className="mission-section animate-left">
                <h2
                  style={{
                    fontSize: "40px",

                    fontWeight: "900",
                  }}
                >
                  Our Mission
                </h2>
                <p
                  style={{
                    margin: "30px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  We specialize in Cloud, Software, and Mobile App Development
                  services for various industries including Ecommerce,
                  Education, Manufacturing, Healthcare, and more.
                </p>
              </div>
              <div className="opportunities-section animate-right">
                <h2
                  style={{
                    fontSize: "40px",

                    fontWeight: "900",
                  }}
                >
                  Opportunities
                </h2>
                <p
                  style={{
                    margin: "30px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  Master MuleSoft technology for a world of opportunities.
                  Become a MuleSoft Certified developer through our training and
                  receive company certification. Get real-time project
                  experience along with the chance to prepare for MuleSoft
                  certification provided by Salesforce/MuleSoft.
                </p>
              </div>
            </div>

            <div
              className="image animate-down"
              style={{
                maxWidth: "230px",
                // height: "370px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg/v1/fill/w_912,h_1510,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg"
                alt="imgageLeft"
                style={{}}
              />
            </div>
          </div> */}
        </div>
      </section>

      <footer>{/* Footer content here */}</footer>
    </>
  );
}

export default AboutUs;
