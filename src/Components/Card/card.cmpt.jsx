// import React from 'react';
import "../Card/card.css";
function CardCoin({ coinList, ind }) {
  // console.log(coinList.image);
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = coinList;
  // console.log(image);
  const prcChange = price_change_percentage_24h.toFixed(2);
  let prcColor = prcChange >= 0 ? "green" : "red";
  return (
    <div className="card">
      <h1 className="sr-num">{ind + 1}</h1>
      <div className="coin-logo cmn-div-ft">
        <img
          src={image}
          alt={name}
          // srcSet={`${image} 10000w`}
          className="logo-img"
        />
        <h1 className="coin-name ">{name}</h1>
      </div>
      <h1 className="symbol h1tag cmn-div-ft">{symbol.toUpperCase()}</h1>
      <h1 className="h1tag cmn-div-ft">{`₹${current_price}`}</h1>
      <h1 className={`h1tag cmn-div-ft ${prcColor}`}>{`${prcChange}%`}</h1>
      <h1 className="h3tag">{`₹${market_cap}`}</h1>
    </div>
  );
}

export default CardCoin;
