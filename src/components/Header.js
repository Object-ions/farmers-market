import React from "react";
import "./Header.css";
import farmersMarket from "./../img/farmers-market.jpg"

function Header(){
  return (
    <div className="header">
      <img className="farmers-market" src={farmersMarket} alt="Farmers Market Logo" />
      <h1>Farmer's Market</h1>
    </div>
  );
}

export default Header;