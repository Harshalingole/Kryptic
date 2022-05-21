import CardCoin from "../Card/card.cmpt";
import CoinNav from "../NavBar/navbar.cmpt";
import "./card-list.css";
function CardListCoin(prompt) {
  const { filtrCnDt } = prompt;
  // console.log(filtrCnDt);
  return (
    <>
      <div className="card-list">
        <CoinNav />
        {filtrCnDt.map((coin, index) => {
          return <CardCoin coinList={coin} ind={index} key={coin.id} />;
        })}
      </div>
    </>
  );
}

export default CardListCoin;
