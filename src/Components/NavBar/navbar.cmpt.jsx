import "./navbar.css";
function CoinNav() {
  return (
    <nav className="coin-nav">
      <h1 className="sr-num">#</h1>
      <h1 className="cmn h1tag">Coin Name</h1>
      <h1 className="cmn h1tag">Symbol</h1>
      <h1 className="cmn h1tag">Price</h1>
      <h1 className="cmn h1tag">24hr</h1>
      <h1 className="cmn h1tag">MKT Cap</h1>
    </nav>
  );
}

export default CoinNav;
