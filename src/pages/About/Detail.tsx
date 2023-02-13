import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const [bebida, setbebida] = useState(Object);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.drinks[0]);
        setbebida(json.drinks[0]);
      });
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      {!bebida.strDrink ? <h1>Cargando</h1> : <h1>bebida {bebida.strDrink}</h1>}
    </div>
  );
}

export default Detail;
