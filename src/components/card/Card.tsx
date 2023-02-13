import { Link } from "react-router-dom";

type props = {
  info: any;
};

function Card({ info }: props) {
  return (
    <div>
      <img src={info.strDrinkThumb} alt={info.strDrink} />
      <p>
        <Link to={`/detail/${info.idDrink}`}>{info.strDrink}</Link>
      </p>
      <p>
        <b>Category: {info.strCategory}</b>
      </p>
    </div>
  );
}

export default Card;
