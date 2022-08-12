import React from "react";
import "./coin.css";

function Coin({ name, icon, price, symbol,pricechange }) {
  return (
    
    <div className="coin">
      <img src={icon} alt="coin" className="coinImage" />
      <div className="name">{name}</div> 
      <div className="symbol">{symbol}</div> 
      <div className={`pricechange ${pricechange<0?'red':'green'}` }>{pricechange}</div>
      <div className="price">$ {price}</div>
    </div>
  );
}

export default Coin;
