import { useSelector } from "react-redux";
import "./Modal.scss";

interface props {
  set: any;
}

function Modal({ set }: props) {
  const detail = useSelector((state: any) => state.detail);

  const cerrarModal = () => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    set(false);
  };

  return (
    <div className="modal">
      <button onClick={cerrarModal} className="cerrarModal">
        X
      </button>
      <div className="detail">
        <img src={detail.strDrinkThumb} alt={detail.strDrink} />
        <div className="detalles">
          <h1>{detail.strDrink}</h1>
          <p>Vaso: {detail.strGlass}</p>
          <p>Ingrediente 1: {detail.strIngredient1}</p>
          <p>Ingrediente 2: {detail.strIngredient2}</p>
          <p>Ingrediente 3: {detail.strIngredient3}</p>
          <br />
          <p>Preparacion: </p>
          <textarea disabled defaultValue={detail.strInstructionsES}></textarea>
        </div>
      </div>
    </div>
  );
}

export default Modal;
