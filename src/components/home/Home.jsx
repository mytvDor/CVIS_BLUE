import "./Home.css";
import Cards from "./allCards/Cards";
import BookDemo from "./bookDemo/BookDemo";
import Main_slider from "./slider/main_slider";
import Ourfeedback from "./ourfeed/ourfeedback";
import CardBrochure from "./allCards/CardBrochure";
import Navbar from "../attributes/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main_slider />
      <div className="cardsFlow" style={{ width: "100%" }}>
        {" "}
        <Cards />
        <CardBrochure />
      </div>

      <BookDemo />
      {/* <Ourfeedback /> */}
    </>
  );
}

export default Home;
