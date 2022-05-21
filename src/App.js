// import SearchBox from "../src/Components/SearchBar/coin-search.component.jsx";
import { useEffect, useState } from "react";
import "./App.css";
import CardListCoin from "./Components/Card-list/card-list-cmpt";
import SearchBar from "./Components/SearchBar/search.cmpt";
// import DisplayCoins from "./Components/ApiData/coin-display.component";

function App() {
  const apiLink =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false";
  const [coinData, setCoinData] = useState([]);
  const [srchField, setSrchField] = useState("");
  const [filtrCnDt, setFiltrCnDt] = useState(coinData);
  const getJson = async () => {
    const res = await fetch(apiLink);
    const data = await res.json();
    setCoinData(data);
  };
  const onSrchChange = (e) => {
    const srchString = e.target.value.toLowerCase();
    console.log(srchString);
    setSrchField(srchString);
  };

  useEffect(() => {
    getJson();
  }, []);
  useEffect(() => {
    const newFiltrCnDt = coinData.filter((coin) => {
      return coin.name.toLowerCase().includes(srchField);
    });
    setFiltrCnDt(newFiltrCnDt);
  }, [srchField, coinData]);

  return (
    <div className="App container">
      <h1 className="heading">Welcome To Crypto Mart</h1>
      <h3 className="h3tag heading">Made by 'Harshal Ingole'</h3>
      <SearchBar
        type="search"
        className="coin-search"
        onChangeHandeler={onSrchChange}
        placeholder="Search Currency"
      />
      <br />
      <CardListCoin filtrCnDt={filtrCnDt} />
    </div>
  );
}

export default App;
