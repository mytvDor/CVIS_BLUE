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
import CardBrochure from "./allCards/CardBrochure";
import Navbar from "../attributes/Navbar";
import Steps from "./Steps";
import Testimonials from "./allCards/Testimonials";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main_slider />
      <div className="cardsFlow" style={{ width: "100%" }}>
        <Cards />
        <div className="mission">
          <h1 className="animated fadeIn">YOUR VISION OUR SOLUTION</h1>
        </div>
        <Steps></Steps>
        <CardBrochure />
      </div>
      <FeedForm />

      <Testimonials></Testimonials>
      {/* <BookDemo /> */}
      {/* <Ourfeedback /> */}
    </>
  );
}

export default Home;
