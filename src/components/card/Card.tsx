import { useDispatch } from "react-redux";
import { viewDetail } from "../../store/action";
import "./Card.scss";

type props = {
  info: any;
  set: any;
};

function Card({ info, set }: props) {
  const dispatch = useDispatch();
  console.log(info);

  const view = () => {
    dispatch(viewDetail(info));
    set(true);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };

  return (
    <div className="card" onClick={view}>
      <img src={info.strDrinkThumb} alt={info.strDrink} />
      <p>{info.strDrink}</p>
      <p>Category: {info.strCategory}</p>
    </div>
  );
}

export default Card;
