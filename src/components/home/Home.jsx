// import "./Home.css";
// import Cards from "./allCards/Cards";
// import FeedForm from "../home/bookDemo/FeedForm";
// import BookDemo from "./bookDemo/BookDemo";
// import Main_slider from "./slider/main_slider";
// import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
// import Navbar from "../attributes/Navbar";
// // import { Steps } from "antd";
// import Steps from "./Steps";

// function Home() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Main_slider />
//       <div className="cardsFlow" style={{ width: "100%" }}>
//         {" "}
//         <Cards />
//         <div className="mission">
//           <h1>YOUR VISION OUR SOLUTION</h1>
//         </div>
//         <Steps></Steps>
//         <CardBrochure />
//       </div>
//       <FeedForm />
//       {/* <BookDemo /> */}
//       {/* <Ourfeedback /> */}
//     </>
//   );
// }

// export default Home;
import "./Home.css";
import Cards from "./allCards/Cards";
import FeedForm from "../home/bookDemo/FeedForm";
import BookDemo from "./bookDemo/BookDemo";
import Main_slider from "./slider/main_slider";
import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
import Navbar from "../attributes/Navbar";
import Steps from "./Steps";
import Testimonials from "./allCards/Testimonials";
import Hero from "./Hero.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      {/* <Main_slider /> */}
      <main>
        <div className="container">
          <div>
            {" "}
            <img src={Hero} alt="Hero" />
          </div>{" "}
          <div className="hero-text">
            <h1>Elevate Your Business with Advanced Software Technologies</h1>
            <p>
              Transform your operations and achieve greater efficiency with our
              state-of-the-art software solutions. Join us in shaping the future
              of your business.
            </p>
            <button onClick={() => navigate("/contact")}>Contact Us</button>{" "}
          </div>
        </div>
      </main>
      <div className="cardsFlow " style={{ width: "100%" }}>
        <Cards />
        <div className="mission">
          <h1 className="animated fadeIn animate-down">
            YOUR VISION OUR SOLUTION
          </h1>
        </div>
        <Steps></Steps>
      </div>
      <FeedForm />

      <Testimonials></Testimonials>
      {/* <BookDemo /> */}
      {/* <Ourfeedback /> */}
    </>
  );
}

export default Home;
