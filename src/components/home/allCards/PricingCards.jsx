import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../attributes/Navbar";

const PricingCards = () => {
  const { category } = useParams();

  return (
    <div style={{ marginTop: "-380px" }}>
      {/* <Navbar></Navbar> */}
      <h1>Welcome to pricing</h1>
      <p>Category: {category}</p>
    </div>
  );
};

export default PricingCards;
